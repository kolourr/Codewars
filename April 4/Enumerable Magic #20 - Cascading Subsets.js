function eachCons(array, n) {
  let arr = [];
  
  for(let i=0; i<array.length; i++){
    arr.push(array.slice(i,n+i))
  }
  
   return arr.filter(item => item.length === n)
  
}
 
