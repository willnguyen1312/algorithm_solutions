/**
 *
 *
 * @param {string} str
 * @param {number[]} queries
 *
 * @returns {string[]} result
 */
function weightedUniformStrings(str, queries) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const lookup = {}
  alphabet.forEach((item, index) => {
    lookup[item] = index + 1
  })

  const set = new Set()
  let queue = []

  for (const item of str) {
    if (queue.includes(item)) {
      queue.push(item)
    } else {
      queue = [item]
    }
    set.add(lookup[item] * queue.length)
  }

  const result = queries.map(query => (set.has(query) ? 'Yes' : 'No'))
  return result
}

export { weightedUniformStrings }
