import { abbrevName } from '..'

describe('abbrevName function', function() {
  it('should work', () => {
    const SamHarris = 'Sam Harris'
    const PatrickFeenan = 'Patrick Feenan'
    const GeorgeClooney = 'george clooney'

    expect(abbrevName(SamHarris)).toBe('S.H')
    expect(abbrevName(SamHarris)).toBe('S.H')
    expect(abbrevName(PatrickFeenan)).toBe('P.F')
    expect(abbrevName(GeorgeClooney)).toBe('G.C')
  })
})
