Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
 
function translatePigLatin(str) {
  let arr = str.toLowerCase().split("")
  let countCons = str.match(/^[^aeiou]+/g) 
  let countVowel = str.match(/^[aeiou]+/g)   
 
 if(countCons ==null){
   return str + 'way' 
 }
else if(countVowel == null){
   return str.replace(countCons, "").concat(countCons).concat("ay")
}
 
 
}
 
 
 

