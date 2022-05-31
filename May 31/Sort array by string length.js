
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength (array) {
  
  let newArr = []
  
  for(let i=0; i<array.length; i++){
    newArr.push(array[i].length)
  }
  
  let obj = Object.assign(...array.map((item, index) => ({[item]: newArr[index]})))
  let order = Object.values(obj).sort((a,b) => a - b ) 
  
  let newArr2 = []
  
  for(let i=0; i<order.length; i++){
    newArr2.push(Object.keys(obj).find(key => obj[key] === order[i]))
  }
  
  return newArr2
  
  

};

Better Solution 

function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length);
};
