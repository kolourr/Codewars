Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]


var sortme = function( names ){
    return names.sort((a,b) => { return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1 });
 }
 


 sortme = function( names ){
    return names.sort(function(first, second) {
      return first.toLowerCase().localeCompare(second.toLowerCase())
    })
  }
  