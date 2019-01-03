import { camelcase } from '..'

describe('camelCase function', () => {
  it('should work', () => {
    const input = 'saveChangesInTheEditor'
    const expectedOutput = 5

    expect(camelcase(input)).toBe(expectedOutput)
  })
})
