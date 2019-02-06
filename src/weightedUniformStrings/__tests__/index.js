import { weightedUniformStrings } from '..'

describe('weightedUniformStrings function', () => {
  it('should work', () => {
    const expectedOutput = ['Yes', 'Yes', 'Yes', 'Yes', 'No', 'No']

    expect(weightedUniformStrings('abccddde', [1, 3, 12, 5, 9, 10])).toEqual(
      expectedOutput
    )
  })
})
