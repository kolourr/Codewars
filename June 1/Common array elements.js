Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
More examples in the test cases.

Good luck!



function common(a,b,c){
    let answer = [];
    for(let i = 0; i < a.length; i++){
      if(b.includes(a[i]) && c.includes(a[i])){
        answer.push(a[i]);
        b.splice(b.indexOf(a[i]), 1);
        c.splice(c.indexOf(a[i]), 1);
      }
    }
    return answer.reduce((acc, val)=> acc + val, 0);
  }
  