/**
 *
 *
 * @param {string} str
 *
 * @returns {number} result
 */
function stringConstruction(str) {
  return Array.from(new Set(str)).length
}

export { stringConstruction }
