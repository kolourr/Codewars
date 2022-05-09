Password Check - Binary to String
A wealthy client has forgotten the password to his business website, but he has a list of possible passwords. His previous developer has left a file on the server with the name password.txt. You open the file and realize it's in binary format.

Write a script that takes an array of possible passwords and a string of binary representing the possible password. Convert the binary to a string and compare to the password array. If the password is found, return the password string, else return false;

function decodePass( passArr, bin ){
    let str = '';
    let arr = bin.split(" ")    
    for(let i=0; i<arr.length; i++){
      str += String.fromCharCode(parseInt(arr[i],2))
    }

  let count = 1  
  for(let i=0; i<passArr.length; i++){
       if(passArr[i] ==str){
         count++
       }
  }

  return count > 1 ? str : false 


}




Better Solution 

function decodePass(a,s) {
    const password = String.fromCharCode( ...s.split(" ").map( s => Number.parseInt(s,2) ) );
    return a.includes(password) && password ;
  }
  