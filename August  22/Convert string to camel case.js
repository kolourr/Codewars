// DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    if(str.length ==0 ) return ''
    let arr

    if(str.includes('-')){
      arr = str.split("-")
    }else{
      arr = str.split("_")
    }

    let newStr = ''
    arr.map((item, index) => {

      if(index ==0) {
        newStr += item
        }
      else{
        let brokenChar = item.split("")
        newStr += brokenChar[0].toUpperCase() + brokenChar.join("").slice(1)

      }


    })

    return newStr

  }