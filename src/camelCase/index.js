/**
 *
 * @param {String} str
 *
 * @returns {Number} result
 */
function caesarCipher(str) {
  const isUpper = letter => letter.toUpperCase() === letter
  return str.split('').filter(isUpper).length + 1
}

export { caesarCipher as camelcase }
