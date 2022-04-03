function digitize(n) {
    return n.toString().split("").map((num) => Number(num)).reverse(); 
  }
  