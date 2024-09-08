function maxValue(array: number[]) {
  let maxvalue = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxvalue) {
      maxvalue = array[i]
    }
  }
  return maxvalue
}
console.log(
  maxValue([
    10, 50, 2, 234, 35, 2, 4, 34, 523, 2, 5, 346, 37, 45, 623, 53, 754, 623, 5,
    26, 36,
  ])
)
