import { balancedSums } from '..'

describe('balancedSums', () => {
  it('should work as expected', () => {
    const input1 = [1, 2, 3]

    const expectedOutput1 = 'NO'
    expect(balancedSums(input1)).toEqual(expectedOutput1)

    const input2 = [1, 2, 3, 3]

    const expectedOutput2 = 'YES'
    expect(balancedSums(input2)).toEqual(expectedOutput2)

    const input3 = [0, 0, 2, 0]

    const expectedOutput3 = 'NO'
    expect(balancedSums(input3)).toEqual(expectedOutput3)
  })
})
