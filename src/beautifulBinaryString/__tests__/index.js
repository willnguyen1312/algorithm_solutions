import { beautifulBinaryString } from '..'

describe('beautifulBinaryString  function', () => {
  it('should work as expected', () => {
    const input = '0101010'
    const expectedOutput = 2

    expect(beautifulBinaryString(input)).toBe(expectedOutput)
  })
})
