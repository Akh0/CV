'use strict';

var _ = require('lodash');
var Captcha = require('./captcha.model');

//// Get list of captchas
//exports.index = function(req, res) {
//  Captcha.find(function (err, captchas) {
//    if(err) { return handleError(res, err); }
//    return res.json(200, captchas);
//  });
//};
//
//// Get a single captcha
//exports.show = function(req, res) {
//  Captcha.findById(req.params.id, function (err, captcha) {
//    if(err) { return handleError(res, err); }
//    if(!captcha) { return res.send(404); }
//    return res.json(captcha);
//  });
//};
//
//// Creates a new captcha in the DB.
//exports.create = function(req, res) {
//  Captcha.create(req.body, function(err, captcha) {
//    if(err) { return handleError(res, err); }
//    return res.json(201, captcha);
//  });
//};
//
//// Updates an existing captcha in the DB.
//exports.update = function(req, res) {
//  if(req.body._id) { delete req.body._id; }
//  Captcha.findById(req.params.id, function (err, captcha) {
//    if (err) { return handleError(res, err); }
//    if(!captcha) { return res.send(404); }
//    var updated = _.merge(captcha, req.body);
//    updated.save(function (err) {
//      if (err) { return handleError(res, err); }
//      return res.json(200, captcha);
//    });
//  });
//};
//
//// Deletes a captcha from the DB.
//exports.destroy = function(req, res) {
//  Captcha.findById(req.params.id, function (err, captcha) {
//    if(err) { return handleError(res, err); }
//    if(!captcha) { return res.send(404); }
//    captcha.remove(function(err) {
//      if(err) { return handleError(res, err); }
//      return res.send(204);
//    });
//  });
//};

function handleError(res, err) {
  return res.send(500, err);
}