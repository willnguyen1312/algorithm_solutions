/**
 *
 * @param {number} m
 * @param {number[]} arr
 *
 * @returns {number[]} result
 */
function icecreamParlor(m, arr) {
  const lookup = {}
  let result
  for (let index = 0; index < arr.length; index += 1) {
    const item = arr[index]
    const remainder = m - item
    if (lookup[remainder]) {
      return [lookup[remainder], index + 1].sort()
    }

    lookup[item] = index + 1
  }
}

export { icecreamParlor }
