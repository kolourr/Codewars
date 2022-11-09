// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

function last(x){

  //Will the string always be words and never have any special characters or spaces
//Need to return a sorted array based on the last letter of the word
//Sort is a lexigraphical sort
//charcode at - starts counting at 0 - 0 indexed
  return x.split(" ").sort((a,b) => {

     if(a.charCodeAt(a.length - 1) > b.charCodeAt(b.length - 1 )){
       return 1
     }
     else if(a.charCodeAt(a.length - 1) < b.charCodeAt(b.length - 1 )){
       return -1
       }
     else{
       return 0
     }
   })


 }

