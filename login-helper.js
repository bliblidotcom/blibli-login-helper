/*!
 *  @author: Irfan Maulana 
 *  https://github.com/mazipan/blibli-login-helper  
 * 
 */
'use strict';

module.exports.validateEmail = function (string) {
  var obj = require('./module/_validateEmail');
  return obj._validateEmail(string);
};

module.exports.checkEmailError = function (string, self) {
  var obj = require('./module/_checkEmailError');  
  return obj._checkEmailError(string, self);
};

module.exports.validatePassword = function (string) {
  var obj = require('./module/_validatePassword');
  return obj._validatePassword(string);
};

module.exports.checkPasswordError = function (string, self) {
  var obj = require('./module/_checkPasswordError');
  
  return obj._checkPasswordError(string, self);
};

module.exports.getEmptyError = function () {
  var obj = require('./module/_getEmptyError');
  
  return obj._getEmptyError();
};

module.exports.failedHandler = function (response, self) {
  var obj = require('./module/_failedHandler');
  
  return obj._failedHandler(response, self);
};

module.exports.FBinitialize = function (facebookAppId, options) {
  var obj = require('./module/_FBinitialize');
  
  return obj._FBinitialize(facebookAppId, options);
};

module.exports.loginFacebook = function (submitFn) {
  var obj = require('./module/_loginFacebook');
  
  return obj._loginFacebook(submitFn);
};
