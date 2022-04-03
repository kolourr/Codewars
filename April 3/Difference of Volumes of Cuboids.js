function findDifference(a, b) {
    let arr1 = a.reduce((total, item) => total * item, 1); 
    let arr2 = b.reduce((total, item) => total* item, 1 ); 
    return Math.abs(arr1-arr2); 
    
  }
  