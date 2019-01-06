/**
 *
 *
 * @param {string} str
 *
 * @returns {string} result
 */
function gameOfThrones(str) {
  const lookup = str.split('').reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc
  }, {})

  const isEven = x => x % 2
  let count = 0

  for (const item of Object.values(lookup)) {
    if (isEven(item)) {
      count += 1
      if (count > 1) {
        return 'NO'
      }
    }
  }

  return 'YES'
}

export { gameOfThrones }
