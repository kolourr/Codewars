Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    let htmlEntity = {
      '&' : '&amp;',
      '<'	: '&lt;',
      '>'	: '&gt;',
      '"'	: '&quot;',
      '\'': '&apos;'
  
    }
  
    let arr = str.split("")
    let newArr = arr.map(item =>   htmlEntity[item] || item)
    let newStr = newArr.join("")
    return newStr  
   
     
  }
  
   
  convertHTML("Schindler's List") 