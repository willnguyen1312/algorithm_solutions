/**
 *
 *
 * @param {string} str
 *
 * @returns {string} result
 */
function superReducedString(str) {
  let result = str

  for (let index = 1; index < result.length; index += 1) {
    if (result[index] === result[index - 1]) {
      result = result.substring(0, index - 1) + result.substring(index + 1)
      index = 0
    }
  }
  return result.length ? result : 'Empty String'
}

export { superReducedString }
