/**
 *
 * @param {String} str
 *
 * @returns {String} result
 */
function hackerrankInString(str) {
  const hackerrankStr = 'hackerrank'.split('')
  let currentLetter = hackerrankStr.shift()

  let arrFromStr = str.split('')
  let index = arrFromStr.indexOf(currentLetter)

  while (index !== -1 && currentLetter) {
    currentLetter = hackerrankStr.shift()
    arrFromStr = arrFromStr.slice(index + 1)
    index = arrFromStr.indexOf(currentLetter)
  }

  return hackerrankStr.length ? 'NO' : 'YES'
}

export { hackerrankInString }
