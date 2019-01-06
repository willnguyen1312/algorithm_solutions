/**
 *
 *
 * @param {string[]} arrStr
 *
 * @returns {string[]} result
 */
function bigSorting(arrStr) {
  return arrStr.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length
    }

    if (a.length === b.length) {
      return +a - +b
    }
  })
}

export { bigSorting }
