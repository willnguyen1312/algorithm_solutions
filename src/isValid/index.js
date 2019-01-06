/**
 *
 *
 * @param {string} str
 *
 * @returns {'YES' | 'NO'} result
 */
function isValid(str) {
  const lookup = str.split('').reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc
  }, {})

  const count = {}

  for (const [key, value] of Object.entries(lookup)) {
    if (count[value]) {
      count[value].push(key)
    } else {
      count[value] = [key]
    }
  }
  const listValue = Object.values(lookup)
  const max = Math.max(...listValue)
  const min = Math.min(...listValue)

  if ((count[max].length > 1 || Object.keys(count).length > 2) && min !== max) {
    return 'NO'
  }

  return 'YES'
}

export { isValid }
