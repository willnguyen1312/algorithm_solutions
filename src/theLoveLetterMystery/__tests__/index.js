import { theLoveLetterMystery } from '..'

describe('theLoveLetterMystery  function', () => {
  it('should work as expected', () => {
    const input1 = 'abc'
    const expectedOutput1 = 2

    expect(theLoveLetterMystery(input1)).toBe(expectedOutput1)

    const input2 = 'cba'
    const expectedOutput2 = 2

    expect(theLoveLetterMystery(input2)).toBe(expectedOutput2)
  })
})
