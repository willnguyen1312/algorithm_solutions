import { minimumNumber } from '..'

describe('minimumNumber function', () => {
  it('should work', () => {
    const input1 = [3, 'Ab1']
    const expectedOutput1 = 3

    expect(minimumNumber(...input1)).toBe(expectedOutput1)

    const input2 = [11, '#HackerRank']
    const expectedOutput2 = 1

    expect(minimumNumber(...input2)).toBe(expectedOutput2)

    const input3 = [7, 'AUzs-nV']
    const expectedOutput3 = 1

    expect(minimumNumber(...input3)).toBe(expectedOutput3)
  })
})
