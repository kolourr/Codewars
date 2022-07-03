// Implement a function called areThereDuplicates which accepts a veriable number of arguments and checks whether there are duplciates among the arguments passed in. You can solve this using the frquency counter pattern or the multiple pointers pattern 


function areThereDuplicates(...arr){
    if(arr.length == 0) return false
    let obj = {}
    for(let i=0; i<arr.length; i++){
        let val = arr[i]
        obj[val] ? obj[val] +=1 : obj[val] = 1
    }
    return Object.values(obj).some(item => item > 1)
 
}

console.log(areThereDuplicates(2,3,4,5,6,4))
console.log(areThereDuplicates(2,3,4,5,6,7))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))

One-liner Solution 

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }
  