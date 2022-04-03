function sumOfDifferences(arr) {
    let newArr =arr.sort((a,b) => b - a);
   
    let sum = 0;
    for(let i=0; i<newArr.length - 1; i++){
      sum += newArr[i] - newArr[i+1]; 
    }
    
   return sum; 
    
  }
  