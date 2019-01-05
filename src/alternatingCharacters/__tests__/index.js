import { alternatingCharacters } from '..'

describe('alternatingCharacters function', () => {
  it('should work as expected', () => {
    const input1 = 'AAABBB'
    const expectedOutput1 = 4

    expect(alternatingCharacters(input1)).toBe(expectedOutput1)

    const input2 = 'ABABABAB'
    const expectedOutput2 = 0

    expect(alternatingCharacters(input2)).toBe(expectedOutput2)
  })
})
