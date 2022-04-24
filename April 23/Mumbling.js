This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.



function accum(s) {
	let str =''
  for(let i=0; i<s.length; i++){
    
    
    if(i == 0){
      str += s[i].toUpperCase()  + '-'
    }
    else if(i > 0 && i <(s.length -1)){
      str += s[i].toUpperCase()  
      let count = 0
      
      while(count < i){
      str +=   s[i].toLowerCase() 
      count++
              }
       str +=  '-'
    }
    else {
      str += s[i].toUpperCase()  
      let count2 = 0
      
      while(count2 < i){
      str +=   s[i].toLowerCase() 
      count2++
              }
        
    }
  }
  
 return str
}


Better Solution: 

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }
  