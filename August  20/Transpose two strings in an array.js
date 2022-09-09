Transpose two strings in an array

DESCRIPTION:
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
  
    let longString = Math.max(...(array.map(el => el.length)))
    let arr = []
    
    for(let i=0; i<longString; i++){ 
        let str1 = array[0][i]
        let ans1 = str1 === undefined ? ' ' : str1
        let str2 = array[1][i]
        let ans2 = str2 === undefined ? ' ' : str2
          
      if(i === longString - 1){
      arr.push(ans1 + ' ' + ans2 )
    }else{
      arr.push(ans1 + ' ' + ans2 +  '\n' )
    }
      }
  
    return arr.join("")
  
  
}

    