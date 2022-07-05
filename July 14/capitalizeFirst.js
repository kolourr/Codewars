//Write a recusive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array 

function capitalizeFirst(arr){

    let newArr = []
    function helper(helperArr){
        if(helperArr.length == 0) return 

        if(helperArr[0]){
            newArr.push(helperArr[0].slice(0,1).toUpperCase() + helperArr[0].slice(1).toLowerCase())
        }
        helper(helperArr.slice(1))
    }

    helper(arr)
    return newArr
}




console.log(capitalizeFirst(['car','taco','banana']))