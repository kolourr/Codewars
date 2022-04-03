function getAverage(marks){
  
    let sum =  marks.reduce((sum, i) => sum + i,  0);
    return Math.floor(sum/marks.length); 
    
  }
  