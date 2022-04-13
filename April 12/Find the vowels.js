// Find the vowels

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
// So given a string "super", we should return a list of [2, 4].
// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)


function vowelIndices(word){
  let arr = word.toLowerCase().split("")
   
  let newArr = []
  
    for(let i=0; i<arr.length; i++){
    if(arr[i] === 'a' || arr[i] === 'e' ||  arr[i] === 'i' ||  arr[i] === 'o' ||  arr[i] === 'u' ||  arr[i] === 'y'){
      newArr.push(i+1)
    }
  }
    return newArr
  }
  
  
  Better solution
  function vowelIndices(word) {
    var arr = [];
    for(var i = 0; i < word.length; i++) {
      if(/[aeioyu]/i.test(word[i])) {
        arr.push(i+1);
      }
    }
    return arr;
  }
  