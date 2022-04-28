Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.


function fearNotLetter(str) {
 
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let length = str.length
    let startPoint = alphabet.indexOf(str[0])
   
   
    for(let i=startPoint; i< (startPoint+length); i++){
      if (!str.includes(alphabet[i])){
          return alphabet[i]
      }
    }
   
    return undefined 
     
   
  }
  