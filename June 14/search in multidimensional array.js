Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

Example:

locate(['a','b',['c','d',['e']]],'e'); // should return true
locate(['a','b',['c','d',['e']]],'a'); // should return true
locate(['a','b',['c','d',['e']]],'f'); // should return false


var locate = function(arr, v) {
  return arr.some(function(e) { return Array.isArray(e) ? locate(e, v) : e === v; });
}
var locate = function(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return true;
    if (Array.isArray(arr[i]) && locate(arr[i], value)) return true; 
  }
  return false;
}
