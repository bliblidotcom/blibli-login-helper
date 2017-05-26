'use strict';

/**
 * checkEmailError for email format
 * @param {string} email string
 * @param {Object} self/this from component
 *
 * @return {boolean} true if valid
 */

module.exports._checkEmailError = function (string, self) {
  var obj = require('./_validateEmail');

  var isValid = obj._validateEmail(string);
  var error = {username: {error: false, code: null, text: ''}};
  if (!isValid) {
    error = {username: {error: true, code: 'INVALID_EMAIL', text: self.$t('error_login.INVALID_EMAIL')}};
  }
  Object.assign(self.errorData, error);
  return isValid;
};