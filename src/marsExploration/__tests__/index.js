import { marsExploration } from '..'

describe('marsExploration function', () => {
  it('should work', () => {
    const input = 'SOSSPSSQSSOR'
    const expectedOutput = 3

    expect(marsExploration(input)).toBe(expectedOutput)
  })
})
