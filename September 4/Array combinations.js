// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

function solve(arr) {


    let newArr = arr.map(item => new Set(item).size)

    let numComb = newArr.reduce((acc, item) => acc * item, 1)

    return numComb

  //   Hint: You have an array full of arrays. Map through the parent array and make sure each
  //   sub array is a set aka no duplicate numbers. Once each sub array contains no duplicates
  //   you can just reduce multiplying the length of each sub array together to get the total combinations

  };