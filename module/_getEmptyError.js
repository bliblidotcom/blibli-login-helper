'use strict';
/**
 * Get all error data with empty set
 *
 * @return {Object} error object with empty data
 */

module.exports._getEmptyError = function () {
  var error = {
    username: { error: false, code: null, text: '' },
    password: { error: false, code: null, text: '' },
    general: { error: false, code: null, text: '' }
  };
  
  return error;
};