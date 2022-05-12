To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.

let multiplyAll = arr => integer => {
    let newArr =[]
    for(let i=0; i<arr.length; i++){
      newArr.push(arr[i] * integer)
    }
  return newArr
}

https://www.youtube.com/watch?v=iZLP4qOwY8I&ab_channel=FunFunFunction



