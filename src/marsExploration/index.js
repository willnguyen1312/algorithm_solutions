/**
 *
 * @param {String} str
 *
 * @returns {Number} result
 */
function marsExploration(str) {
  const SOS = 'SOS'
  let result = 0

  for (let index = 0; index < str.length; index += 1) {
    const _index = index % SOS.length

    if (SOS[_index] !== str[index]) {
      result += 1
    }
  }

  return result
}

export { marsExploration }
