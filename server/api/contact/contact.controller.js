'use strict';

var _ = require('lodash');
var validator = require('validator');
var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
});

// Creates a new contact in the DB.
exports.create = function (req, res) {
    var contact = req.body;
    var response = checkFields(contact);

    if (response.message) {
        return handleError(res, response);
    }

    sendMail(contact, function () {
        return res.json(201, {message: 'Votre message a bien été envoyé !'});
    }, function (error) {
        console.log(error);
        handleError(res, {message: 'Une erreur s\'est produite !'});
    });
};

function checkFields(contact) {
    var response = {};

    if (typeof contact.nom === 'undefined' || contact.nom.length == 0) {
        response.message = 'Veuillez saisir votre nom.';
    }
    else if (!validator.isEmail(contact.email)) {
        response.message = 'E-mail incorrecte.';
    }
    else if (typeof contact.message === 'undefined' || contact.message.length == 0) {
        response.message = 'Veuillez saisir un message.';
    }
    //else if(typeof contact.captcha === 'undefined' || contact.captcha.length == 0) {
    //    response.message = 'Captcha incorrect.';
    //}

    return response;
}

function sendMail(contact, successCallback, errorCallback) {
    var mailOptions = {
        from: contact.nom + '<' + contact.email + '>',
        to: 'achille.guillon@gmail.com',
        subject: '[CV en ligne] Formulaire de contact',
        text: contact.message + "\n\n Message envoyé par "+contact.email,
        html: '<p>' + contact.message + '</p><br/><br/> Message envoyé par '+contact.email
    };

    transporter.sendMail(mailOptions, function (error, info) {
        error ? errorCallback(error) : successCallback(info);
    });
}

function handleError(res, err) {
    return res.send(500, err);
}