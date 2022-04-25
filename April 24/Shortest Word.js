Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.




function findShort(s){
  
    let arr = s.split(" ")
    let shortest = arr.sort((a,b) => {
      if(a.length >b.length){
        return 1
      }
      else if(a.length <b.length){
        return -1
      }
      else {
        return 0
      }
    }) 
    
      return shortest[0].length
  
    
    
  }

  Better Solution 

  function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }
  