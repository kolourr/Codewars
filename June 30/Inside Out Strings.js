You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'

function insideOut(x){
    let arr = x.split(" ")
    let newArr = []
    
    for(let i=0; i<arr.length; i++){
      if(arr[i].length > 3){
        let half = Math.ceil(arr[i].length/2)
        let lowerhalf = Math.floor(arr[i].length/2)
        if(arr[i].length % 2 == 0){ 
          newArr.push(arr[i].slice(0,half).split("").reverse("").join("") +  arr[i].slice(half).split("").reverse("").join("") )
        }
        else{
          newArr.push(arr[i].slice(0,lowerhalf).split("").reverse("").join("") +  arr[i].slice(lowerhalf, lowerhalf+1) + arr[i].slice(lowerhalf+1).split("").reverse("").join("") )
        }
      }
      
      else{ 
        newArr.push(arr[i])
      }
      
    }
    
  return newArr.join(" ")
  }
   