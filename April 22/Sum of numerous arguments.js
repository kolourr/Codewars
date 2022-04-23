
After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.

Example
findSum(1,2,3,4); // returns 10 
findSum(1,-2);    // returns -1 
findSum();        // returns 0 



function findSum(...nums){
  
    let str = ''
    
    for(let i=0; i<nums.length; i++){
      if(nums[i] === null){
        str = 0
      }
      else if(nums[i] < 0){
        str = -1
      }
    }
    
    if(str === 0){
      return str 
    }
    else if(str === -1){
      return str 
    }
    else {
      
      return nums.reduce((sum, current) => sum + current, 0)
    }
      
      
      
  }
  


  Better solution 


  function findSum(...nums) {
    return nums.reduce((a, b) => a < 0 || b < 0 ? - 1 : a + b, 0)
  }
  