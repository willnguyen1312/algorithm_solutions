/**
 *
 *
 * @param {number[]} listA
 * @param {number[]} listB
 *
 * @returns {number[]} result
 */
function missingNumbers(listA, listB) {
  let dataSet = {}
  let results = []

  for (let idx = 0; idx < listB.length; idx++) {
    dataSet[listB[idx]] = !dataSet[listB[idx]] ? 1 : (dataSet[listB[idx]] += 1)
  }

  for (let idx = 0; idx < listA.length; idx++) {
    dataSet[listA[idx]] -= 1
  }

  for (let key in dataSet) {
    if (dataSet.hasOwnProperty(key)) {
      if (dataSet[key] > 0) {
        results.push(key)
      }
    }
  }
  return results.map(Number)
}

export { missingNumbers }
