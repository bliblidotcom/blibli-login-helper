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

  var error = { password: { error: false, code: null, text: '' } };
  var errorPass = obj._validatePassword(string);
  if (errorPass !== '') {
    error = { password: { error: true, code: errorPass, text: self.$t('error_login.' + errorPass) } };
  }
  Object.assign(self.errorData, error);

  return errorPass;
};