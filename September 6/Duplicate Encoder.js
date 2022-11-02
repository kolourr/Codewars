// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
// indexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
// lastIndexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)


//Quadratic solution O(n2)
//lastindexOf is expensive
//Make it using hash maps you will use the optimizing
//2(N) => O(N) solution - https://medium.com/@martin.crabtree/javascript-tracking-key-value-pairs-using-hashmaps-7de6df598257
//Count all the values and put it in an object - we
//Have this question memorized
function dupEncoder(str){

  let newArr = str.toLowerCase().split("").map((item, index, arr) => {

    if(arr.indexOf(item) === arr.lastIndexOf(item)){
      return '('

    }
    else{
      return ')'
    }
  })

  return newArr.join("")


}


// Had a founder message me on YC's workforastartup  saying he thought I would be a good fit for a role and requested that I schedule a 1/2 meeting with him. So I did. He didnt show to the meeting. I email/messaged him - no response. Is this behaviour common?


console.log(dupEncoder('recede'))
console.log(dupEncoder('Success'))
console.log(dupEncoder('(( @'))