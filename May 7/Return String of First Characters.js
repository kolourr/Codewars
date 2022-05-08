In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

function makeString(s){
    let arr = s.split(" ")
    let str=''
    
    for(let i=0; i<arr.length; i++){
      str+=arr[i][0] 
    }
    
    return str
    
  }
  