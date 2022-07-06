//Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized 

function capitalizeWords(arr){

    let newArr = []
    function helper(helperArr){
        if(helperArr.length == 0) return 

        if(helperArr[0]){
            newArr.push(helperArr[0].slice(0).toUpperCase())
        }
        helper(helperArr.slice(1))
    }

    helper(arr)
    return newArr
}




console.log(capitalizeWords(['car','taco','banana']))