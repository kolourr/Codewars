You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W  
e o                 
l r    
l l           
o d
A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the character would be


function transposeTwoStrings (array) {
    let longest  
    
    array[0].length > array[1].length ? longest = array[0].length : longest = array[1].length
      
    let str = ''
       
    for(let i=0; i<longest;i++){
      if(i != longest - 1){
        let str1, str2 
        array[0].slice(i,i+1).length == 0 ? str1 = ' ' : str1 = array[0].slice(i,i+1)
        array[1].slice(i,i+1).length == 0 ? str2 = ' ' : str2 = array[1].slice(i,i+1)
        str += str1 + ' ' + str2 + '\n' 
      }
      else{
        let str3, str4
        array[0].slice(i,i+1).length == 0 ? str3 = ' ' : str3 = array[0].slice(i,i+1)
        array[1].slice(i,i+1).length == 0 ? str4 = ' ' : str4 = array[1].slice(i,i+1)
        str += str3 + ' ' + str4
      }
      
    }
    
    return str 
    
  }
  
   