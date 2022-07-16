//Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and coonverts them to strings. Recursion would be a great way to solve this 


function stringifyNumbers(obj){
    let newObj = {}
        Object.keys(obj).forEach(item => {
            if (typeof obj[item] === 'object' && !Array.isArray(obj[item])){
                newObj[item] = stringifyNumbers(obj[item]);
            } else if (typeof obj[item] === 'number'){
                newObj[item] = obj[item].toString();
            }
            else{
                newObj[item] = obj[item];

            }
        })       
     
    
    return newObj;      
}
   
   
    
   
var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  


console.log(stringifyNumbers(obj1))  
console.log(stringifyNumbers(obj2))  