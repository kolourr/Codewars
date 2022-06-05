You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, and None in Python.

You can assume, that the input string has always non-zero length.

Example
firstNonRepeated("test") // returns "e"
firstNonRepeated("teeter") // returns "r"
firstNonRepeated("trend") // returns "t" (all the characters are unique)
firstNonRepeated("aabbcc") // returns null (all the characters are repeated)



function firstNonRepeated(s) {
  
    let arr = s.split("")
    if(arr.length == 0) return null 
    let findDuplicates = arr.filter((item, index) => arr.indexOf(item) != index).join("")
    let newArr = []
    
    
    for(let i=0; i<arr.length; i++){
      if(!findDuplicates.includes(arr[i])){
        newArr.push(arr[i])
      }
    }
     return newArr.length ==0 ?  null : newArr[0]
      
  }

  Better Solution 
  
  const firstNonRepeated = s =>
  [...s].find(val => s.indexOf(val) === s.lastIndexOf(val)) || null;
