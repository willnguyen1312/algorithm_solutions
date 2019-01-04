import { hackerrankInString } from '..'

describe('hackerrankInString function', () => {
  it('should work', () => {
    const input1 = 'hereiamstackerrank'
    const expectedOutput1 = 'YES'

    expect(hackerrankInString(input1)).toBe(expectedOutput1)

    const input2 = 'hackerworld'
    const expectedOutput2 = 'NO'

    expect(hackerrankInString(input2)).toBe(expectedOutput2)
  })
})
