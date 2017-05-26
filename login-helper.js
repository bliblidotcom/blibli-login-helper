/*!
 *  @author: Irfan Maulana 
 *  https://github.com/mazipan/blibli-login-helper  
 * 
 */
'use strict';

/* eslint-disable no-useless-escape */
/**
 * Validating email format
 * @param {string} email string
 *
 * @return {boolean} true if valid
 */

module.exports.validateEmail = function (string) {
  var REGEX_EMAIL = /^(([^()[\]\\.,;:\s@\"]+(\.[^()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return REGEX_EMAIL.test(string);
};

/**
 * checkEmailError for email format
 * @param {string} email string
 * @param {Object} self/this from component
 *
 * @return {boolean} true if valid
 */

module.exports.checkEmailError = function (string, self) {
  var isValid = validateEmail(string);
  var error = {username: {error: false, code: null, text: ''}};
  if (!isValid) {
    error = {username: {error: true, code: 'INVALID_EMAIL', text: self.$t('error_login.INVALID_EMAIL')}};
  }
  Object.assign(self.errorData, error);
  return isValid;
};

/* eslint-disable no-useless-escape */
/**
 * Validating password format
 * @param {string} password string
 *
 * @return {string} error code when not valid
 */
module.exports.validatePassword = function (string) {
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

/**
 * checkPasswordError for password format
 * @param {string} password string
 * @param {Object} self/this from component
 *
 * @return {string} empty if valid
 */

module.exports.checkPasswordError = function (string, self) {
  var error = { password: { error: false, code: null, text: '' } };
  var errorPass = validatePassword(string);
  if (errorPass !== '') {
    error = { password: { error: true, code: errorPass, text: self.$t('error_login.' + errorPass) } };
  }
  Object.assign(self.errorData, error);

  return errorPass;
};

/**
 * Get all error data with empty set
 *
 * @return {Object} error object with empty data
 */

module.exports.getEmptyError = function () {
  var error = {
    username: { error: false, code: null, text: '' },
    password: { error: false, code: null, text: '' },
    general: { error: false, code: null, text: '' }
  };
  
  return error;
};

/**
 * Handle error code in login/register from backend
 * @param {Object} response body from backend
 * @param {Object} self/this from component
 *
 * @return {Object} error object that assign to error data
 */
module.exports.failedHandler = function (response, self) {
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

/**
 * Initialize facebook SDK
 * @param {string} facebookAppId
 *
 * void
 */
module.exports.FBinitialize = function (facebookAppId) {
  (function (d, s, id) {
    var js = {};
    var fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.async = true;
    js.defer = true;
    js.src = '//connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');

  /* eslint-disable no-undef */
  window.fbAsyncInit = function () {
    if (typeof FB !== 'undefined') {
      FB.init({
        appId: facebookAppId,
        cookie: true,
        xfbml: true,
        version: 'v2.7'
      });
    }
  };
};

/**
 * Login with Facebook SDK
 * @param {Function} submitFn
 *
 * void
 */
module.exports.loginFacebook = function (submitFn) {
  /* eslint-disable no-undef */
  var urlApi = '/me?fields=gender,first_name,last_name,birthday,locale,timezone,email';
  var fetchFacebookData = function fetchFacebookData(accessToken) {
    if (typeof FB !== 'undefined') {
      FB.api(urlApi, function (response) {
        submitFn(response, accessToken);
      });
    }
  };

  if (typeof FB !== 'undefined') {
    FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        fetchFacebookData(response.authResponse.accessToken);
      } else {
        FB.login(function (response) {
          if (response.status === 'connected') {
            fetchFacebookData(response.authResponse.accessToken);
          }
        }, { scope: 'public_profile,email' });
      }
    });
  }
};