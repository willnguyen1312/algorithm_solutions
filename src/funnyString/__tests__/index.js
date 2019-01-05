import { funnyString } from '..'

describe('funnyString function', () => {
  it('should work as expected', () => {
    const input1 = 'acxz'
    const expectedOutput1 = 'Funny'

    expect(funnyString(input1)).toBe(expectedOutput1)

    const input2 = 'bcxz'
    const expectedOutput2 = 'Not Funny'
    expect(funnyString(input2)).toBe(expectedOutput2)
  })
})
