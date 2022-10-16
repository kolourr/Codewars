// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


function cleanString(s) {
    if(s.length == 0) return ''

      const arr = [];

      for (let char of s) {
          if (char !== "#") {
              arr.push(char)
              continue
          }

          if (arr.length) {
              arr.pop();
          }
      }

          return arr.join("")



  }