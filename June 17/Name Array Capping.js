Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']



function capMe(names) {
  
    let arr = []
    
    for(let i=0; i<names.length; i++){
       
       arr.push(names[i][0].toUpperCase() + names[i].slice(1).toLowerCase())  
    }
    
    return arr
  
  }   