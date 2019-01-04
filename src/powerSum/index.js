function powerSum(x, n, num = 1) {
  const numToN = Math.pow(num, n)
  if (numToN > x) {
    return 0
  } else if (numToN == x) {
    return 1
  } else {
    return powerSum(x, n, num + 1) + powerSum(x - numToN, n, num + 1)
  }
}

export { powerSum }
