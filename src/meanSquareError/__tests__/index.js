import { meanSquareError } from '..'

describe('meanSquareError function', () => {
  it('should work as expected', () => {
    const input1 = 'AAABBB'
    const expectedOutput1 = 9

    expect(meanSquareError([1, 2, 3], [4, 5, 6])).toBe(expectedOutput1)
  })
})
