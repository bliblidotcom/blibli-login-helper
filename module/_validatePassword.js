'use strict';

/* eslint-disable no-useless-escape */
/**
 * Validating password format
 * @param {string} password string
 *
 * @return {string} error code when not valid
 */

// (?=.*\d) -> at least one number
// (?=.*[a-zA-Z]) -> at least one letter
// [0-9a-zA-Z]{6,} -> length of minimum six character
const PASS_REGEX = /^(?=.*\d)(?=.*[a-zA-Z])(.+){6,}$/

// test functions
const TESTS = [
  {
    f: (s) => !s || !('' + s).trim(),
    e: 'INVALID_BLANK'
  },
  {
    f: (s) => !PASS_REGEX.test(s),
    e: 'INVALID_PASSWORD'
  }
]


module.exports._validatePassword = function (s) {
  const t = TESTS.find(i => i.f(s)) || {}
  return t.e || ''
};
