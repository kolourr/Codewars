// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1


function avgLength(arr){

    //Will there always be an array, special char, empty array, empty string

      let average =  Math.round(arr.reduce((acc, item) => acc + Math.round(item.length) ,0)/arr.length)
    //   let average =  Math.round(arr.join("").length / arr.length)

      let newArr = arr.map(item => item[0].repeat(average))

      return newArr


}

console.log(avgLength(['aa', 'bbb', 'cccc'] ))