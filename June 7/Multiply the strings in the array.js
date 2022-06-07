You received an array with two strings. Create a function that will return their product as a string. E.g.

arrMultiply(['9','6']) should return '54'


function arrMultiply(arr){
   return (Number(arr[0]) * Number(arr[1])).toString()
    
}