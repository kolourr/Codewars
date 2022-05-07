Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal



function compare(s1, s2) {
    if (s1 == null || s1 == "" || s1.match(/[\W\d]/) ) s1 = ""
     if (s2 == null || s2 == "" || s2.match(/[\W\d]/) ) s2 = ""
     
     let s1Upper = s1.toUpperCase()
     let s2Upper = s2.toUpperCase()
     
     let sum1=0
     let sum2=0
   
     for(let i=0; i<s1.length; i++){
       sum1 += s1Upper.charCodeAt(i)
       
     }
       for(let i=0; i<s2.length; i++){
       sum2 += s2Upper.charCodeAt(i)
       
     }
     
    return  sum1 == sum2? true : false
     
   }