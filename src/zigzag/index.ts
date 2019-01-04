function zigzag(arr: number[]): number {
  let result = 1
  let currentZigzag = []
  for (let index = 0; index < arr.length; index += 1) {
    if (
      (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) ||
      (arr[index] < arr[index - 1] && arr[index] < arr[index + 1])
    ) {
      currentZigzag.push(arr[index])
    } else {
      result =
        currentZigzag.length !== 1 && currentZigzag.length + 1 > result
          ? currentZigzag.length + 1
          : result
      currentZigzag = [arr[index]]
    }
  }
  return result
}

export { zigzag }
