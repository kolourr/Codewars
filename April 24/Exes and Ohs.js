// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false



function XO(str) {
    let arr = str.toLowerCase().split("")
    let countX = 0
    let countO = 0
    
    arr.forEach((item) => item == 'x' ? countX += 1 : countX += 0)
    arr.forEach((item) => item == 'o' ? countO += 1 : countO += 0)

    return countX == countO ? true: false 
  
   
}

Better Solution 

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }
  