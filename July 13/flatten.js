//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattended 

function flatten(arr){

    let newArr = []

    arr.forEach(item => {
        if(Array.isArray(item)){
            newArr.push(...flatten(item))
        }
        else{
            newArr.push(item)
        }
    })

    return newArr

}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))


// Another Solution 

// function flatten(oldArr){
//     var newArr = []
//         for(var i = 0; i < oldArr.length; i++){
//           if(Array.isArray(oldArr[i])){
//                 newArr = newArr.concat(flatten(oldArr[i]))
//           } else {
//                 newArr.push(oldArr[i])
//           }
//     } 
//     return newArr;
//   }
  