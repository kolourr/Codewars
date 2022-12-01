// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"
// NOTE: The algorithm should always use the longest possible overlap.

// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"


// return  longest string of array
// value.reduce((a, b) => a.length > b.length ? a : b, '');


function mergeStrings(first, second){

    let arr = []

    for(let i=0; i<first.length; i++){
      arr.push(first.slice(i))
    }

     let value = []
     for(let i=0; i<arr.length;i++){
      if(second.startsWith(arr[i])){
        value.push(arr[i])
      }
     }

     let longest = value.reduce((a, b) => a.length > b.length ? a : b, '');

     return first.concat(second.slice(longest.length))



   }
