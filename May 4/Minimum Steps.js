Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

Notes:
List size is at least 3.
All numbers will be positive.
Numbers could occur more than once , (Duplications may exist).
Threshold K will always be reachable.

Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)


function minimumSteps(numbers, value){
  let ascend = numbers.sort((a,b) => a - b )

  let newArr = []
  let count =0
  
  ascend.reduce((previous, current, i) => 
    newArr[i] = previous + current, 0 )  
  
  for(let i=0; i<newArr.length; i++){
    if(newArr[i] < value){
      count++
    }
  }
  
 
 return count
}



function minimumSteps(numbers, value) {
  const nums = numbers.slice().sort((a, b) => a - b);
  for (let i = 0, sum = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum >= value) {
      return i;
    }
  }
}


