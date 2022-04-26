Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.


function diffArray(arr1, arr2) {
  
    let two = arr1.concat(arr2)
    const newArr = two.filter(item => 
      !arr1.includes(item) || !arr2.includes(item) 
    )
   
   
    return newArr;
  }
  
  