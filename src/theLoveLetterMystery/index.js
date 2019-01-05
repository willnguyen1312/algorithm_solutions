/**
 *
 *
 * @param {string} str
 *
 * @returns {number} result
 */
function theLoveLetterMystery(str) {
  const halfLength = Math.floor(str.length / 2)
  let result = 0

  for (let index = 0; index < halfLength; index += 1) {
    const left = str[index]
    const right = str[str.length - 1 - index]
    if (left !== right) {
      result += Math.abs(right.charCodeAt() - left.charCodeAt())
    }
  }

  return result
}

export { theLoveLetterMystery }
