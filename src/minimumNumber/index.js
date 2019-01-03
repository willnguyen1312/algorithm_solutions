/**
 *
 * @param {Number} n
 * @param {String} password
 *
 * @returns {Number} result
 */
function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  const minLength = 6
  const numbers = /[0-9]/
  const lower_case = /[a-z]/
  const upper_case = /[A-Z]/
  const special_characters = /[!@#$%^&*()\-+]/

  const checkFuncGenerator = regex => password => !regex.test(password)
  const checkFuncs = [
    checkFuncGenerator(numbers),
    checkFuncGenerator(lower_case),
    checkFuncGenerator(upper_case),
    checkFuncGenerator(special_characters),
  ]

  const result = checkFuncs.filter(func => func(password)).length

  return result + n < minLength ? minLength - n : result
}

export { minimumNumber }
