Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!

function solve(arr) {
    let reversed = arr.reverse()
    
     let unique = reversed.filter((item, index) => {
       return reversed.indexOf(item) == index
     }) 
                          
     return unique.reverse()
     
   }


Better Soluton 


const solve = arr => [...new Set(arr.reverse())].reverse()

    
                        