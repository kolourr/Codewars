Thinkful - String Drills: Repeater

Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.
Example: (Input1, Input2 --> Output)
"a", 5 --> "aaaaa"

Solution 
function repeater(string, n){
 let newStr =''
 
 for(let i=0; i<n; i++){
   newStr += string
 }
  
  return newStr
}
