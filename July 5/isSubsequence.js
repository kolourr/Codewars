//Write a function calles isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequency of the characters in the second string. In other words, the function should check whetehr the charcters in the first string appear soewhere in the second string, without their order changing.




function isSubsequence(str1, str2){
    if (str1.length == 0) return true 
    let i = 0
    let j = 0

    while(j<str2.length){
        if(str2[j] == str1[i]) i++
        if(i == str1.length) return true 
        j++
    }
    return false 

}









console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))