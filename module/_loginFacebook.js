'use strict';

/**
 * Login with Facebook SDK
 * @param {Function} submitFn
 *
 * void
 */
module.exports._loginFacebook = function (submitFn) {
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