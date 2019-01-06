import { pickingNumbers } from '..'

describe('pickingNumbers', () => {
  it('should work as expected', () => {
    const input1 = [4, 6, 5, 3, 3, 1]

    const expectedOutput1 = 3
    expect(pickingNumbers(input1)).toEqual(expectedOutput1)
  })
})
