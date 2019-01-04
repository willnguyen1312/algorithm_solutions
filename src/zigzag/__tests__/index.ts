import { zigzag } from '..'

describe('zigzag', () => {
  it('should work as expected', () => {
    const input1 = [9, 8, 8, 5, 3, 5, 3, 2, 8, 6]
    const expectedOutput1 = 4
    expect(zigzag(input1)).toBe(expectedOutput1)

    const input2 = [4, 4]
    const expectedOutput2 = 1
    expect(zigzag(input2)).toBe(expectedOutput2)
  })
})
