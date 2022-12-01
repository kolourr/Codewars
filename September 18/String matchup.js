// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// Example
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']
// How many times do the elements in array2 appear in array1?

// 'abc' appears twice in the first array (2)
// 'cde' appears only once (1)
// 'uap' does not appear in the first array (0)
// Therefore, solve(array1, array2) = [2, 1, 0]

// Good luck!

// If you like this Kata, please try:


function solve(a,b){

    let ans =  b.map((item1, index, arr) => a.filter(item2 => item2 ==item1).length)

    return ans


  }

function solve(a,b){

    let obj = {}

    for(let val of b){
      obj[val] ? obj[val] += 0 : obj[val] = 0
    }

    for(let val of a){
      if(obj[val] >= 0){
        obj[val] += 1
      }
    }

     return Object.values(obj)


   }