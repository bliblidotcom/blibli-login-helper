'use strict';

/**
 * Initialize facebook SDK
 * @param {string} facebookAppId
 *
 * void
 */
module.exports._FBinitialize = function (facebookAppId, options) {
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
    var opt = options || {}
    var cookie = opt.cookie === undefined ? true : opt.cookie
    if (typeof FB !== 'undefined') {
      FB.init({
        appId: facebookAppId,
        cookie,
        xfbml: true,
        version: 'v5.0'
      });
    }
  };
};
