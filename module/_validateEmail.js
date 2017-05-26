'use strict';

/* eslint-disable no-useless-escape */
/**
 * Validating email format
 * @param {string} email string
 *
 * @return {boolean} true if valid
 */

module.exports._validateEmail = function (string) {
  var REGEX_EMAIL = /^(([^()[\]\\.,;:\s@\"]+(\.[^()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return REGEX_EMAIL.test(string);
};