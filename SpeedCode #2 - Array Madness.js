function arrayMadness(a, b) {

    let sqArr = a.map(x => Math.pow(x, 2)); 
    let sumArr1 = sqArr.reduce((sum, i) => sum + i, 0);
    
    let cubeArr = b.map(x => Math.pow(x,3));
    let sumArr2 = cubeArr.reduce((sum,i) => sum+ i, 0);
    
    if (sumArr1 > sumArr2) {
      return true;
    }
    else {
      return false;
    }
   
    
  }
  