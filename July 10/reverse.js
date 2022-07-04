//Write a recursive function called revrse which accepts a string and returns a new string in reverse 

function reverse(str){
	if(str == "") return ""
  else 
    return  reverse(str.slice(1)) + str.charAt(0)
  
}