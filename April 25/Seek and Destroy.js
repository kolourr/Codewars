You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object.
 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

function destroyer(arr) {
 
    let values = Array.from(arguments).slice(1);
     
    let newArr = arguments[0].filter(item => {
      return !values.includes(item)
    })
     
    return newArr
     
     
     
    }
     
    destroyer([1, 2, 3, 1, 2, 3], 2, 3);
    
    
    
    