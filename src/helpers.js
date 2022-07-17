export const getOrderNumber = (arr) => {
  // const array = []

//   arr.forEach((item => {
//       array.push(item.transactionid)
//     }
//   ))
// console.log(array)
//   for (let index = 1; index < array.length + 2; index++) {
//     if (!array.includes(index)) return index
//   }


  // return 1

  if (arr.length) {
    const array = []
    arr.forEach((item => {
      array.push(item.id)
    }
  ))
  return Math.max(...array) + 1
  }
 
  return 1
}

export const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  })
  return formatter.format(money)
}