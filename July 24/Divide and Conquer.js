Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.

function divCon(x){
  
    let stringInt = x.filter(item => typeof(item) == 'string') 
    let stringSum = stringInt.reduce((a,b) => Number(a) + Number(b) , 0)
    
    let numbers = x.filter(item => typeof(item) == 'number') 
    let numbersSum = numbers.reduce((a,b) => a + b , 0)
  
    
    return numbersSum - stringSum
  }