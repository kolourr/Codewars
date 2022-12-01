// In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

// For example:

// solve("our code") = "edo cruo"
// -- Normal reversal without spaces is "edocruo".
// -- However, there is a space at index 3, so the string becomes "edo cruo"

// solve("your code rocks") = "skco redo cruoy".
// solve("codewars") = "srawedoc"
// More examples in the test cases. All input will be lower case letters and in some cases spaces.

// Good luck!

// Please also try:

// Simple time difference

// Simple remove duplicates

function solve(str){
    let arr = str.split("")
    let blankIndex = []

    for(let i=0; i< arr.length; i++){
      if(arr[i] == ' '){
        blankIndex.push(i)
      }
    }

   let stringReverse = str.split(" ").join("").split("").reverse("").join("")
   let newStr = ''
   let length = blankIndex.length + stringReverse.length
   let j = 0
   let k = 0

   for(let i=0; i<length; i++){
     if(i ==blankIndex[j]){
       newStr += ' '
       j++
     }
     else{
       newStr += stringReverse[k]
       k++
     }
   }

     return newStr
 }