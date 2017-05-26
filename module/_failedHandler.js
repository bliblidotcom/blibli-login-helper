'use strict';

/**
 * Handle error code in login/register from backend
 * @param {Object} response body from backend
 * @param {Object} self/this from component
 *
 * @return {Object} error object that assign to error data
 */
module.exports._failedHandler = function (response, self) {
  var errorObject = { general: { error: true, code: response.status, text: self.$t('error_login.UNKNOWN') } };
  if (response) {
    if (response.code === 401) {
      errorObject = { general: { error: true, code: response.status, text: self.$t('error_login.UNAUTHORIZED') } };
    } else if (response.code === 400) {
      var multipleError = '';
      for (var key in response.errors) {
        response.errors[key].map(function (elem) {
          if (multipleError !== '') {
            multipleError += ' <br/> ';
          }
          var errorStringValue = self.$t('error_login.' + elem);
          if (errorStringValue !== null) {
            var cleanError = errorStringValue.replace('[INPUT_VALUE]', key);
            multipleError += cleanError;
          } else {
            multipleError = self.$t('error_login.UNKNOWN');
          }return elem;
        });
      }
      errorObject = { general: { error: true, code: 'MULTIPLE_ERROR', text: multipleError } };
    }
  }
  return errorObject;
};