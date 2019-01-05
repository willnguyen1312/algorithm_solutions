/**
 *
 *
 * @param {string} str
 *
 * @returns {string} result
 */
function funnyString(str) {
  const original = str.split('').map(letter => letter.charCodeAt())
  const reverse = [...original].reverse()

  for (let index = 0; index < original.length - 1; index += 1) {
    const first = Math.abs(original[index + 1] - original[index])
    const second = Math.abs(reverse[index + 1] - reverse[index])

    if (first !== second) {
      return 'Not Funny'
    }
  }

  return 'Funny'
}

export { funnyString }
