import { icecreamParlor } from '..'

describe('icecreamParlor function', () => {
  it('should work', () => {
    const input1 = [4, [1, 4, 5, 3, 2]]
    const expectedOutput1 = [1, 4]

    expect(icecreamParlor(...input1)).toEqual(expectedOutput1)

    const input2 = [4, [2, 2, 4, 3]]
    const expectedOutput2 = [1, 2]

    expect(icecreamParlor(...input2)).toEqual(expectedOutput2)
  })
})
