//Write a function which called minSubArrayLen which accepts two parameters - an array ofpositive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the num is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead. 


function minSubArrayLen(arr, num) {

    let total = 0 
    let start = 0
    let end= 0 
    let minLen = Infinity 

    while(start <arr.length){

        if(total <num && end <arr.length){
            total += arr[end]
            end++
        }

        else if(total >= num){
            minLen = Math.min(minLen, end - start)
            total -= arr[start]
            start++
        }

        else{
            break
        }
    }

    return minLen === Infinity ? 0 : minLen

}
    

 
console.log(minSubArrayLen([2,3,1,2,4,3], 7))
console.log(minSubArrayLen([2,1,6,5,4], 9))
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52))
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39))
console.log(minSubArrayLen([1,4,16,22,5,7], 95))