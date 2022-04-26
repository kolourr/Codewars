Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.



function whatIsInAName(collection, source) {
 
    // Only change code below this line
  const souceKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(obj => souceKeys
        .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
        .reduce((a, b) => a && b));



        // return collection
        // .filter(obj => sourceKeys
        //                  .every(key => obj.hasOwnProperty(key) &&
        //                         obj[key] === source[key]));
    
  }
  




Code Explanation
We start by filtering through collection using Array.filter().
Next, we map through all keys and return Boolean values based on the check conditions: both the key and its corresponding value must exist within the object we are filtering through.
Then we reduce the mapped Boolean values to a single Boolean that indicates whether all srcKeys pass the conditions checked above.
This single Boolean will be used to filter through the collection.
