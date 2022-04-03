function mergeArrays(arr1, arr2) {
  
    let combinedArray = arr1.concat(arr2);   
    let uniqueArray = combinedArray.filter(function(item, pos) {
        return combinedArray.indexOf(item) == pos;
    }); 
    let sortedArray = uniqueArray.sort((a,b) => a-b); 
    return sortedArray;
    
    
  }
  