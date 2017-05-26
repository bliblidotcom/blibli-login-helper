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
 * checkEmailError for email format
 * @param {string} email string
 * @param {Object} self/this from component
 *
 * @return {boolean} true if valid
 */

 checkEmailError(string, self)
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
 * checkPasswordError for password format
 * @param {string} password string
 * @param {Object} self/this from component
 *
 * @return {string} empty if valid
 */

 checkPasswordError(string, self)
```


```
/**
 * Get all error data with empty set
 *
 * @return {Object} error object with empty data
 */

 getEmptyError()
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