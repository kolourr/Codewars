// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a part of values in the array where the average of the paur equals the target average. There may be more than one pair that matches the average target 


function averagePair(arr,num){
    if (arr.length == 0) return false 

    let left = 0
    let right = arr.length - 1

    while(left<right){
        let average = (arr[left] + arr[right])/2
        if(average == num){
            return true
        }
        else if(average > num){
            right--
        }
        else{
            left++
        }
    }

    return false 

}







console.log(averagePair([1,2,3], 2.5))
console.log(averagePair([-1,0,3,4,5,6], 4.1))
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))
