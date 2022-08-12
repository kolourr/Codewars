Roman Numeral Converter
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    if (num === 0) return ''
  
    let romanNumerals = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
    ]
  
    for(let i=0; i<romanNumerals.length; i++){
        if (num >= romanNumerals[i][0]) {
        return romanNumerals[i][1] + convertToRoman(num - romanNumerals[i][0])
      }
    }
  }
  
  convertToRoman(36);