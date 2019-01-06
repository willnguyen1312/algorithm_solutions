/**
 *
 *
 * @param {string} str1
 * @param {string} str2
 *
 * @returns {'YES' | 'NO'} result
 */
function twoStrings(str1, str2) {
  const set1 = new Set(str1)
  const arr2 = str2.split('')

  return arr2.some(letter => set1.has(letter)) ? 'YES' : 'NO'
}

export { twoStrings }
