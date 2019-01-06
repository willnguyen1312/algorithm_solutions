import { isValid } from '..'

describe('isValid', () => {
  it('should work as expected', () => {
    const input1 = 'abc'
    const expectedOutput1 = 'YES'
    expect(isValid(input1)).toBe(expectedOutput1)

    const input2 = 'aabbccddeefghi'
    const expectedOutput2 = 'NO'
    expect(isValid(input2)).toBe(expectedOutput2)
  })
})
