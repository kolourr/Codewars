Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']


function solution(str){
  if(str.length == 0) return []
  let arr = []
  
  for(let i=0; i<str.length; i=i+2){
    if( str.slice(i, i+2).length == 1  ){
        arr.push(str.charAt(str.length - 1) + '_')
    }
    else{
      arr.push(str.slice(i, i+2))
    }
    
  }
   return arr
}

 