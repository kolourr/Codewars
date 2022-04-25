In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!

function solve(s){
 
    let upperCase = s.match(/[A-Z]/g).length
    let lowerCase = s.match(/[a-z]/g).length
    let num = s.match(/\d/g).length
    let specChar = s.match(/\W/g).length
  
    let arr = [upperCase,lowerCase,num,specChar]
    return arr
  
  
    
    
  }