export const getOrderNumber = (arr) => {
  const array = []

  arr.forEach((item => {
      array.push(item.transactionid)
    }
  ))
console.log(array)
  for (let index = 1; index < array.length + 2; index++) {
    if (!array.includes(index)) return index
  }

  return 1
}