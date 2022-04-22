Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:

['simple', 'is', 'better', 'than', 'complex'] ==> 7
Do not modify the input list.


function longest(words) {
 
    let lengthLargest = 0
    for(let i=0; i<words.length; i++){
      if(words[i].length >lengthLargest){
        lengthLargest = words[i].length
      }
    }
    return lengthLargest 
  }


  Better solution

  const longest = words => words.reduce((a, word) => Math.max(a, word.length), 0);
