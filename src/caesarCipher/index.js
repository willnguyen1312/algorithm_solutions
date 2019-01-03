/**
 *
 * @param {String} str
 * @param {Number} rotateTime
 *
 * @returns {String} result
 */
function caesarCipher(str, rotateTime) {
  const originalAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetLength = originalAlphabet.length
  const rotateLength = rotateTime % alphabetLength
  const rotatedAlphabet =
    originalAlphabet.substring(rotateLength) +
    originalAlphabet.substring(0, rotateLength)

  const convertCaesar = ((originalAlphabet, rotatedAlphabet) => character => {
    let char = character
    const upperCase = /[A-Z]/
    const isUpperCase = upperCase.test(char)

    if (isUpperCase) {
      char = char.toLowerCase()
    }

    const characterIndex = originalAlphabet.indexOf(char)

    return characterIndex === -1
      ? char
      : isUpperCase
      ? rotatedAlphabet[characterIndex].toUpperCase()
      : rotatedAlphabet[characterIndex]
  })(originalAlphabet, rotatedAlphabet)

  return str
    .split('')
    .map(convertCaesar)
    .join('')
}

export { caesarCipher }
