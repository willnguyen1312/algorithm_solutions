/**
 *
 *
 * @param {number[]} firstArray
 * @param {number[]} secondArray
 * @returns {number}
 */
function meanSquareError(firstArray, secondArray) {
  const { length } = firstArray
  let sum = 0

  for (let index = 0; index < length; index += 1) {
    sum += Math.pow(Math.abs(firstArray[index] - secondArray[index]), 2)
  }

  return sum / length
}

export { meanSquareError }
