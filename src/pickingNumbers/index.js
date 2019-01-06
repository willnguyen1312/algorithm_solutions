/**
 *
 *
 * @param {number[]} arrNum
 *
 * @returns {number} result
 */
function pickingNumbers(arrNum) {
  const map = arrNum.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc
  }, {})

  const keys = Object.keys(map)

  let result = 0

  for (let key of keys) {
    const pair = +key + 1
    if (map[pair]) {
      const sum = Number(map[key]) + Number(map[pair])
      result = result < sum ? sum : result
    }
  }

  return result
}

export { pickingNumbers }
