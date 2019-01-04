/**
 *
 * @param {String} str
 *
 * @returns {String} result
 */
function pangrams(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const _str = str.toLowerCase().replace(/\s/g, '')
  const _alphabet = Array.from(new Set(_str))
    .sort()
    .join('')

  return alphabet === _alphabet ? 'pangram' : 'not pangram'
}

export { pangrams }
