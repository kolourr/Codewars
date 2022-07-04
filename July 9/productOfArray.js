function productOfArray(arr){

  if(arr.length == 1) return arr[0]

  return arr[0] * productOfArray(arr.slice(1))
}


productOfArray([3,4,5,6])

console.log(productOfArray)