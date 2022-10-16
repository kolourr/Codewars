// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str){

    let arr = str.trim().split(" ")

    let reverse = arr.map((item, index) => {

      if(index === 0 || index % 2 ===0){
        return item
      }
      else{
         return item.split("").reverse().join("")
      }

      })

    return reverse.join(" ")


  }