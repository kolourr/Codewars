// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return

// H W
// e o
// l r
// l l
// o d
// A few things to note:

// There should be one space in between the two characters
// You don't have to modify the case (i.e. no need to change to upper or lower)
// If one string is longer than the other, there should be a space where the character would be


function transposeTwoStrings (array) {

    let longest
    array[0].length > array[1].length ? longest = array[0].length : longest = array[1].length
    let one = array[0].split("")
    let two = array[1].split("")

    let newStr = ''

    for(let i=0; i<longest; i++){
      if(i !== longest -1){
        let newOne = one[i]
        let newTwo = two[i]
        if(one[i] === undefined) newOne = ' '
        if(two[i] === undefined) newTwo = ' '
        newStr += newOne + ' ' + newTwo + '\n'
      }
      else{
        let newNewOne = one[i]
        let newNewTwo = two[i]
        if(one[i] === undefined) newNewOne = ' '
        if(two[i] === undefined) newNewTwo = ' '
        newStr += newNewOne + ' ' + newNewTwo

      }

    }

    return newStr


  }


