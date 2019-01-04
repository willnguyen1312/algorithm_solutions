import { superReducedString } from '..'

describe('superReducedString function', () => {
  it('should work', () => {
    const input = 'aaabccddd'
    const expectedOutput = 'abd'

    expect(superReducedString(input)).toBe(expectedOutput)
  })
})
