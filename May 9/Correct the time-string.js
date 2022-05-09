You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
Examples
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  


SOLUTION 

function timeCorrect(timestring) {
  
    if (timestring == '') return timestring;
    if (!/^\d{2}\:\d{2}\:\d{2}$/g.test(timestring)) return null;
    
    const date = new Date(); 
    date.setUTCHours(...timestring.split(':'));
    return date.toLocaleTimeString('en', {hour12: false});
      
  
    
  }
  
   
  