import { gameOfThrones } from '..'

describe('gameOfThrones', () => {
  it('should work as expected', () => {
    const input1 = 'aaabbbb'
    const expectedOutput1 = 'YES'
    expect(gameOfThrones(input1)).toBe(expectedOutput1)

    const input2 = 'cdefghmnopqrstuvw'
    const expectedOutput2 = 'NO'
    expect(gameOfThrones(input2)).toBe(expectedOutput2)
  })
})
