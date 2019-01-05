/**
 *
 *
 * @param {string[]} arr
 *
 * @returns {number} result
 */
function gemstones(arr) {
  const unique = arr.map(item => {
    return Array.from(new Set(item))
  })

  return unique.reduce((acc, cur) => {
    return acc.filter(letter => cur.includes(letter))
  }).length
}

export { gemstones }
