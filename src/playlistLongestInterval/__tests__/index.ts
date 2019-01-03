import { playlistLongestInterval } from '..'

describe('playListLongestInterval', () => {
  it('should work as expected', () => {
    const input1 = ['A (1:30)', 'B (2:00)', 'A (1:30)', 'C (1:00)']
    const expectedOutput1 = 270
    expect(playlistLongestInterval(input1)).toBe(expectedOutput1)

    const input2 = [
      'A (1:30)',
      'C (1:00)',
      'C (1:00)',
      'B (2:00)',
      'B (2:00)',
      'A (1:30)',
    ]
    const expectedOutput2 = 210
    expect(playlistLongestInterval(input2)).toBe(expectedOutput2)

    const input3 = ['F (8:26)', 'W (8:35)', 'F (8:26)', 'A (0:59)', 'F (8:26)']
    const expectedOutput3 = 1080
    expect(playlistLongestInterval(input3)).toBe(expectedOutput3)

    const input4 = [
      'HEOIG (1:52)',
      'F (9:24)',
      'IXDK (0:42)',
      'F (9:24)',
      'D (2:11)',
      'HEOIG (1:52)',
      'IXDK (0:42)',
      'GEAA (2:19)',
      'D (2:11)',
      'IDNQ (9:10)',
      'VNWBLVNUEZ (0:13)',
      'UHHZILNA (9:47)',
      'UZVZ (5:42)',
      'IXDK (0:42)',
      'VNWBLVNUEZ (0:13)',
      'LY (2:48)',
      'UZVZ (5:42)',
      'IDNQ (9:10)',
      'G (3:02)',
      'G (3:02)',
      'IYW (4:26)',
      'UHHZILNA (9:47)',
      'E (4:05)',
      'QNYZXPC (0:59)',
      'UZVZ (5:42)',
    ]

    const expectedOutput4 = 1916
    expect(playlistLongestInterval(input4)).toBe(expectedOutput4)
  })
})
