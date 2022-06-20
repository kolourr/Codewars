Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}



function count(array){

let count = {}
array.forEach(item => { 
  count[item] = (count[item]||0) + 1
})
  
  return count 

  
}