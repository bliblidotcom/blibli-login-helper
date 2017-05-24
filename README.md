# blibli-login-helper
Blibli Login-Register Validation Helper

[![License](https://img.shields.io/github/license/mazipan/blibli-login-helper.svg?maxAge=3600)](https://github.com/mazipan/blibli-login-helper) 
[![Github Issue](https://img.shields.io/github/issues/mazipan/blibli-login-helper.svg?maxAge=3600)](https://github.com/mazipan/blibli-login-helper/issues) 
[![GitHub Fork](https://img.shields.io/github/forks/mazipan/blibli-login-helper.svg?maxAge=3600)](https://github.com/mazipan/blibli-login-helper/network) 
[![GitHub Star](https://img.shields.io/github/stars/mazipan/blibli-login-helper.svg?maxAge=3600)](https://github.com/mazipan/blibli-login-helper/stargazers) 
[![GitHub Contributors](https://img.shields.io/github/contributors/mazipan/blibli-login-helper.svg?maxAge=3600)](https://github.com/mazipan/blibli-login-helper/network/members) 


## Available Methods

```
/**
 * Validating email format
 * @param {string} email string
 *
 * @return {boolean} true if valid
 */

 validateEmail(string)
```


```
/**
 * Validating password format
 * @param {string} password string
 *
 * @return {string} error code when not valid
 */

validatePassword(string) 
```


```
/**
 * Handle error code in login/register from backend
 * @param {Object} response body from backend
 * @param {Object} self/this from component
 *
 * @return {Object} error object that assign to error data
 */

failedHandler(response, self)
```


```
/**
 * Initialize facebook SDK
 * @param {string} facebookAppId
 *
 * void
 */

FBinitialize(facebookAppId)
```


```

/**
 * Login with Facebook SDK
 * @param {Function} submitFn
 *
 * void
 */

loginFacebook(submitFn)
```


Hope will usefull for you all.

Question ? please email : mazipanneh@gmail.com