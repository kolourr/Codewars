Flatten and sort an array
DESCRIPTION:
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

Using the apply method of concat will just take the second parameter as an array, so the last line is identical to this:

There is also the Array.prototype.flat() method (introduced in ES2019) which


"use strict";

function flattenAndSort(array) {

  return  [].concat.apply([], array).sort((a,b) => {
    if(a <b) return -1
    else if(a >b) return 1
    else return 0
  })
  
   
 
}
 