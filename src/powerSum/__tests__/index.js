import { powerSum } from '..'

describe('camelCase function', () => {
  it('should work', () => {
    const input = [100, 2]
    const expectedOutput = 3

    expect(powerSum(...input)).toBe(expectedOutput)
  })
})
