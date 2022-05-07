You will be given two ASCII strings, a and b. Your task is write a function to determine which one of these strings is "worth" more, and return it.

A string's worth is determined by the sum of its ASCII codepoint indexes. So, for example, the string HELLO has a value of 372: H is codepoint 72, E 69, L 76, and O is 79. The sum of these values is 372.

In the event of a tie, you should return the first string, i.e. a.




function highestValue(a, b) {
  
    let arr1 = a.split("")
    let newArr1 = []
  
    let arr2 = b.split("")
    let newArr2 = []
    
   
    for(let i=0; i<arr1.length; i++){
        newArr1.push(arr1[i].charCodeAt(0))
    }
    for(let j=0; j<arr2.length; j++){
        newArr2.push(arr2[j].charCodeAt(0))
  }
   
  let sum1 = newArr1.reduce((acc, item) => acc + item, 0 )
  let sum2 = newArr2.reduce((acc, item) => acc + item, 0 )
  
  return sum1 >= sum2 ? a : b
  }
  

  Better Solution 

  function highestValue(a, b) {
    return [...a].reduce((c, d) => c + d.charCodeAt(), 0) >= [...b].reduce((c, d) => c + d.charCodeAt(), 0) ? a : b
  }
  