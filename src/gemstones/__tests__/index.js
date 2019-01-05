import { gemstones } from '..'

describe('gemstones function', () => {
  it('should work as expected', () => {
    const input = ['abcdde', 'baccd', 'eeabg']
    const expectedOutput = 2

    expect(gemstones(input)).toBe(expectedOutput)
  })
})
