'use strict';

/* eslint-disable no-useless-escape */
/**
 * Validating password format
 * @param {string} password string
 *
 * @return {string} error code when not valid
 */
module.exports._validatePassword = function (string) {
  var errorCode = '';

  if (typeof string !== 'undefined' && string !== null) {
    if (string.length < 6 || string.search(/\d/) < 0 || string.search(/[a-zA-Z]/) < 0) {
      errorCode = 'INVALID_PASSWORD';
    } else if (string.indexOf('%') > 0) {
      errorCode = 'INVALID_CHAR_PERCENT';
    } else if (string.indexOf('=') > 0) {
      errorCode = 'INVALID_CHAR_ASSIGNMENT';
    }
  } else {
    errorCode = 'INVALID_BLANK';
  }

  return errorCode;
};