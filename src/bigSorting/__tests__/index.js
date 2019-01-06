import { bigSorting } from '..'

describe('bigSorting', () => {
  it('should work as expected', () => {
    const input1 = [
      '6',
      '31415926535897932384626433832795',
      '1',
      '3',
      '10',
      '3',
      '5',
    ]

    const expectedOutput1 = [
      '1',
      '3',
      '3',
      '5',
      '6',
      '10',
      '31415926535897932384626433832795',
    ]
    expect(bigSorting(input1)).toEqual(expectedOutput1)
  })
})
