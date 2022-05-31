
Task
Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}


const ultimateReverse = s => {
  let newArr = []
  
  let reversed = s.join("").split("").reverse()
  
    for(var i=0;i<s.length;i++){
      
    newArr.push(reversed.splice(0,s[i].length).join(""))
      
    }
  
   return newArr

 
};