import { pangrams } from '..'

describe('pangrams function', () => {
  it('should work', () => {
    const input1 = 'We promptly judged antique ivory buckles for the next prize'
    const expectedOutput1 = 'pangram'

    expect(pangrams(input1)).toBe(expectedOutput1)

    const input2 = 'We promptly judged antique ivory buckles for the prize'
    const expectedOutput2 = 'not pangram'

    expect(pangrams(input2)).toBe(expectedOutput2)
  })
})
