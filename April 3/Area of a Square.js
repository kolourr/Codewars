function squareArea(A){
  
    let radius = ((4 * A)/Math.PI)/2;
    //toFixed converts a number to string 
    //parseInt converts string into number 
    let square = parseFloat(Math.pow(radius,2).toFixed(2)); 
    return square; 
    
  }
  