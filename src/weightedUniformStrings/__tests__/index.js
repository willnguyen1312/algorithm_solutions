import { weightedUniformStrings } from '..'

describe('weightedUniformStrings function', () => {
  it('should work', () => {
    const input = ['abccddde', [1, 3, 12, 5, 9, 10]]
    const expectedOutput = ['Yes', 'Yes', 'Yes', 'Yes', 'No', 'No']

    expect(weightedUniformStrings(...input)).toEqual(expectedOutput)
  })
})
