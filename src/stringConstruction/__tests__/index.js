import { stringConstruction } from '..'

describe('stringConstruction', () => {
  it('should work as expected', () => {
    const input1 = 'abcd'
    const expectedOutput1 = 4
    expect(stringConstruction(input1)).toBe(expectedOutput1)

    const input2 = 'abab'
    const expectedOutput2 = 2
    expect(stringConstruction(input2)).toBe(expectedOutput2)
  })
})
