/**
 *
 *
 * @param {string} str
 *
 * @returns {number} result
 */
function alternatingCharacters(str) {
  let result = 0
  let currentDuplication = [str[0]]

  for (let index = 1; index < str.length; index += 1) {
    const item = str[index]
    if (currentDuplication.includes(item)) {
      currentDuplication.push(item)
    } else {
      result += currentDuplication.length - 1
      currentDuplication = [item]
    }
  }

  result += currentDuplication.length - 1

  return result
}

export { alternatingCharacters }
