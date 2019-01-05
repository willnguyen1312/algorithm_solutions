/**
 *
 *
 * @param {string} bstr
 *
 * @returns {number} result
 */
function beautifulBinaryString(bstr) {
  let result = 0
  const uglyStr = '010'

  for (let index = 0; index < bstr.length - 2; index += 1) {
    const subStr = bstr.substr(index, 3)
    if (subStr === uglyStr) {
      result += 1
      index += 2
    }
  }

  return result
}

export { beautifulBinaryString }
