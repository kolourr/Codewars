Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


function highestRank(arr){
    let count = {}
    
    arr.forEach(function (v) {
      count[v] = (count[v] || 0) + 1
    })
    
    let answer =  Object.keys(count).sort(function (a, b) {
      let diff = count[b] - count[a]
      return diff == 0 ? b - a : diff
    })[0]    
    
    return Number(answer)
  
  }
   
   