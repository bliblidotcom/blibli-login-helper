const obj = require('../module/_validatePassword')

describe('_validatePassword', () => {
  test('Blank password', () => {
    expect(obj._validatePassword()).toBe('INVALID_BLANK')
    expect(obj._validatePassword('')).toBe('INVALID_BLANK')
    expect(obj._validatePassword('   ')).toBe('INVALID_BLANK')
  })

  test('Invalid password', () => {
    expect(obj._validatePassword('$223####')).toBe('INVALID_PASSWORD')
    expect(obj._validatePassword('dfadd')).toBe('INVALID_PASSWORD')
    expect(obj._validatePassword('33333')).toBe('INVALID_PASSWORD')
    expect(obj._validatePassword('ee333')).toBe('INVALID_PASSWORD')
  })

  test('Valid password', () => {
    expect(obj._validatePassword('ddfd33')).toBe('')
    expect(obj._validatePassword('dafdsa3dfasfa')).toBe('')
    expect(obj._validatePassword('fdsfsasa33')).toBe('')
    expect(obj._validatePassword('fd!fs%sa33')).toBe('')
    expect(obj._validatePassword('fds^&@asa33')).toBe('')
  })
})
