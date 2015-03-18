'use strict';

var _ = require('lodash');
var Contact = require('./contact.model');
var validator = require('validator');
var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'achille.guillon@gmail.com',
        pass: 'akh894+-+-'
    }
});

// Get list of contacts
exports.index = function(req, res) {
  Contact.find(function (err, contacts) {
    if(err) { return handleError(res, err); }
    return res.json(200, contacts);
  });
};

// Get a single contact
exports.show = function(req, res) {
  Contact.findById(req.params.id, function (err, contact) {
    if(err) { return handleError(res, err); }
    if(!contact) { return res.send(404); }
    return res.json(contact);
  });
};

// Creates a new contact in the DB.
exports.create = function(req, res) {
    var response = {};

    var contact = req.body;

    if(typeof contact.nom === 'undefined' || contact.nom.length == 0) {
        response.message = 'Veuillez saisir votre nom.';
    }
    else if(!validator.isEmail(contact.email)) {
        response.message = 'E-mail incorrecte.';
    }
    else if(typeof contact.message === 'undefined' || contact.message.length == 0) {
        response.message = 'Veuillez saisir un message.';
    }
    else if(typeof contact.captcha === 'undefined' || contact.captcha.length == 0) {
        response.message = 'Captcha incorrect.';
    }

    if(response.message.length > 0) {
        return handleError(res, response);
    }

  Contact.create(req.body, function(err, contact) {
    if(err) {
        response.message = 'Une erreur s\'est produite !';
        return handleError(res, response);
    }

// setup e-mail data with unicode symbols
      var mailOptions = {
          from: contact.nom +'<'+contact.email+'>', // sender address
          to: 'achille.guillon@gmail.com', // list of receivers
          subject: '[CV en ligne] Formulaire de contact', // Subject line
          text: contact.message, // plaintext body
          html: '<p>'+contact.message+'</p>' // html body
      };

// send mail with defined transport object
      transporter.sendMail(mailOptions, function(error, info){
          var response = {};

          if(error){
              handleError(res, 'Une erreur s\'est produite !');
          }else{
              response.message = 'Votre message a bien été envoyé !';
              return res.json(201, response);
          }
      });
  });
};

// Updates an existing contact in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Contact.findById(req.params.id, function (err, contact) {
    if (err) { return handleError(res, err); }
    if(!contact) { return res.send(404); }
    var updated = _.merge(contact, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, contact);
    });
  });
};

// Deletes a contact from the DB.
exports.destroy = function(req, res) {
  Contact.findById(req.params.id, function (err, contact) {
    if(err) { return handleError(res, err); }
    if(!contact) { return res.send(404); }
    contact.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}