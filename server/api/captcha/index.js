'use strict';

var express = require('express');
var controller = require('./captcha.controller');
var mathCaptcha = require('math-captcha');

var router = express.Router();

var captcha = new mathCaptcha.CAPTCHA({});

router.get('/', controller.index);

//router.get('/:id', controller.show);
//router.post('/', controller.create);
//router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
//router.delete('/:id', controller.destroy);

module.exports = router;