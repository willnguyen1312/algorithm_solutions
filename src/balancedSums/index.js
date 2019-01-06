/**
 *
 *
 * @param {number[]} arr
 *
 * @returns {"YES" | "NO"} result
 */
function balancedSums(arr) {
  let i = 0
  let j = arr.length - 1
  let sum = 0

  while (i !== j) {
    if (sum >= 0) {
      sum -= arr[j]
      j--
    } else {
      sum += arr[i]
      i++
    }
  }

  return sum ? 'NO' : 'YES'
}

export { balancedSums }
