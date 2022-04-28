Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.




function uniteUnique(...arr) {
    let newArr = [].concat(...arr);
    let uniqueArray = newArr.filter((item, index, arr) =>
         arr.indexOf(item) == index
    )
   // let uniqueArray = [...new Set(newArr)]; - Better Solution 
   
     return  uniqueArray
   }
   
   uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])  