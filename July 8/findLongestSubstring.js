//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters 


function findLongestSubstring(str) {
    let longest = 0
    let seen = {}
    let start = 0

    for(let i=0; i<str.length; i++){
        let char = str[i]
        if(seen[char]){
            start = Math.max(start, seen[char])
        }

        longest = Math.max(longest, i-start+1)
        seen[char] = i + 1
        console.log(seen)
    }
    return longest 
 
  }


//   console.log(findLongestSubstring("jidwejelwdhwio"))
//   console.log(findLongestSubstring("bbbbb"))
  console.log(findLongestSubstring("bbhsbhsblongesthfiehif"))
//   console.log(findLongestSubstring("dihewo"))
//   console.log(findLongestSubstring(""))