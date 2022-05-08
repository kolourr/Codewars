Special thanks to SteffenVogel_79 for the idea.

Challenge:

Given a string, return a copy of the string with the vowels' case swapped.

For this kata, assume that vowels are in the set "aeouiAEOUI".

Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

Addendum: Your solution is only required to work for the ASCII character set.

Please make sure you only swap cases for the vowels.



function swapVowelCase(str) {
    let vowelUpper ="AEOUI".split("")
    let vowelLower ="aeoui".split("")
    let arr = str.split("")
    let newStr = []
     
    
    for(let i=0; i<str.length; i++){
      if(vowelUpper.includes(arr[i])){
        newStr.push(arr[i].toLowerCase() ) 
      }
      else if(vowelLower.includes(arr[i])){
              newStr.push(arr[i].toUpperCase() ) 
      }
      else {
              newStr.push(arr[i] ) 
      }
    }
    return  newStr.join("") 
  }
   