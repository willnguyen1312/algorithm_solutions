import { caesarCipher } from '..'

describe('camelCase function', () => {
  it('should work', () => {
    const input = ['middle-Outz', 2]
    const expectedOutput = 'okffng-Qwvb'

    expect(caesarCipher(...input)).toBe(expectedOutput)
  })
})
