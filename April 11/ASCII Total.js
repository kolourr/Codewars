
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
// examples:
// uniTotal("a") == 97 uniTotal("aaa") == 291


// String.prototype.charCodeAt() can convert string characters to ASCII numbers. For example:






function uniTotal (string) {
    let arr = string.split("")
    let sum = 0
    
    for (let i=0; i<arr.length; i++){
      sum += string.charCodeAt(i) 
    }
    
    return sum 
   
  }
  
  
  Alternate 
  const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  