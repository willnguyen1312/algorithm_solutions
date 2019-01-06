import { twoStrings } from '..'

describe('twoStrings', () => {
  it('should work as expected', () => {
    const input1 = ['hello', 'world']
    const expectedOutput1 = 'YES'
    expect(twoStrings(...input1)).toBe(expectedOutput1)

    const input2 = ['hi', 'world']
    const expectedOutput2 = 'NO'
    expect(twoStrings(...input2)).toBe(expectedOutput2)
  })
})
