function pillars(num_pill, dist, width) {
    if (num_pill> 1){
      return (((dist * 100) * (num_pill-1)) + width * (num_pill - 2));
      }
    else {
      return ((dist * 100) * (num_pill-1)); 
    }
  }
  
  