import { missingNumbers } from '..'

describe('missingNumbers', () => {
  it('should work as expected', () => {
    const input1 = [
      [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
      [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204],
    ]

    const expectedOutput1 = [204, 205, 206]
    expect(missingNumbers(input1[0], input1[1])).toEqual(expectedOutput1)
  })
})
