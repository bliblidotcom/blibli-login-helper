'use strict';
/**
 * checkPasswordError for password format
 * @param {string} password string
 * @param {Object} self/this from component
 *
 * @return {string} empty if valid
 */

module.exports._checkPasswordError = function (string, self) {
  var obj = require('./_validatePassword');

  var error = { error: false, code: null, text: '' };
  var errorPass = obj._validatePassword(string);
  if (errorPass !== '') {
    error = { error: true, code: errorPass, text: self.$t('error_login.' + errorPass) };
  }
  if (self.errorData) self.errorData.password = error;

  return errorPass;
};