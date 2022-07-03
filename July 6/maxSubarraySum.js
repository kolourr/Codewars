//Given an array of integers and numbers, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function 



function maxSubarraySum(arr, num){
    if(num > arr.length) return null 
    let maxSum = 0
    let temporarySum = 0

    for(let i=0; i<num; i++){
        maxSum += arr[i]
    }
     temporarySum = maxSum

    for(let i=num; i<arr.length; i++){
        temporarySum = temporarySum - arr[i-num] + arr[i]
        maxSum = Math.max(maxSum, temporarySum)
    }

    return maxSum

}





console.log(maxSubarraySum([100,200,300,400], 2))
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))
console.log(maxSubarraySum([-3,-2,7,-4,1,-1,4,-2,1], 2))
console.log(maxSubarraySum([2,3], 3))