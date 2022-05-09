Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
Example:
solution(5) // should return "Value is 00005"


Solution 
function solution(value){
  let num = []
  let arr = value.toString().split("")
  
  
  for(let i=0; i<5; i++){
    if(arr[i] != undefined){
      num.push(arr[i]) 
    }
    else {
      num.unshift(0)
    }
  
  }
  
  return  `Value is ${num.join("")}` 
  
  
}
  
 
Better solution 
function solution(value){
  return "Value is " + ("00000" + value).slice(-5);
}
