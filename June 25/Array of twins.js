You are given an array of numbers. Check if the array contains of pairs, i.e every number occurs exactly two times. If true, return true, otherwise false. Your solution should not modify the input array.

function twins(myArray){
  
    const obj = {}
    
    for (let x of myArray)
      obj[x] = (obj[x] || 0) + 1
    
    return Object.values(obj).every(x => x === 2)
  }