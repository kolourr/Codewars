function arrayPlusArray(arr1, arr2) {
   
    return arr1.reduce((sum,i) => sum + i, 0) + arr2.reduce((sum,i) => sum + i, 0) 
    
  }
  