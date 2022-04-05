function pipeFix(numbers){
  let newArr = []
  let firstNum = numbers[0]
  let lastNum = Math.abs(numbers[numbers.length - 1]) 
  
  for(let i=firstNum; i<=lastNum; i++){
    newArr.push(i)
  }
  return newArr

}