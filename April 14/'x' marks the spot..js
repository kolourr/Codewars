#'x' marks the spot

##Task:

Given a two dimensional array, return the co-ordinates of 'x'.

If 'x' is not inside the array, or if 'x' appears multiple times, return []

The co-ordinates should be zero indexed.

You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

const xMarksTheSpot = (input) => {
  
    let arr=[];
    for (var i=0; i<input.length; ++i){
      for (var j=0; j<input[i].length; ++j){
        if (input[i][j]==='x'){
          arr.push([i,j])
          }
        }
      }
    
    return arr.length==1? arr[0]: [];
  }
  