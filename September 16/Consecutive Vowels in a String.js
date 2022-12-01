function getTheVowels(word) {

    let vowels = 'aeiou'.split("")
    let count = 0
    let vCount = 0

    for(let i=0; i<word.length; i++){
      if(word[i] == vowels[vCount]){
        vCount++
        count++
      }
      if(vCount == vowels.length) vCount = 0
      }

    return count

   }