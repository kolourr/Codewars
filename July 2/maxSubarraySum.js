// Write a fucntion called sameFrequency. Given two positive integrers, find out if the two numbers have the same frequency of digits. 


function sameFrequency(num1, num2){
    let str1 = num1.toString().split("")
    let str2 = num2.toString().split("") 
    if(str1.length != str2.length) return false 
    let obj = {}

    for(let i=0; i<str1.length; i++){
        let val = str1[i]
        obj[val] ? obj[val] +=1 : obj[val] = 1
    }


    for(let i=0; i<str2.length; i++){
        let val = str2[i]
        if(!obj[val]){
            return false 
        }
        else{
            obj[val] -= 1
        }
    }
    return true 

}

console.log(sameFrequency(9876566,6656798))

console.log(sameFrequency(1233,3324))

