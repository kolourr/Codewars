No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]

Show some love, rank and upvote!

function equalize(array){
    let arr = []
    let num = ''
    for(let i of array){
      if(i - array[0] >= 0){
        num += '+' + (i - array[0])
      }else{
        num += i - array[0]
      }
      arr.push(num)
      num = ''
    }
    return arr
  }
  