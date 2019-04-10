
/*"Have the function ArithGeo(arr) take the array of numbers stored in arr and
return the string "Arithmetic" if the sequence follows an arithmetic pattern or
return "Geometric" if it follows a geometric pattern. If the sequence doesn't
follow either pattern return -1. An arithmetic sequence is one where the difference
between each of the numbers is consistent, where as in a geometric sequence, each
term after the first is multiplied by some constant or common ratio. Arithmetic
example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may
be entered as parameters, 0 will not be entered, and no array will contain all the
same elements."*/

//My solution:
function ArithGeo(arr) {

  const resultsArith = [];
  const resultsGeo = [];
  /*It's crucial to first arrange the numbers in the array in decending order.*/
  const arrayDecend = arr.sort((a,b) => a > b ? -1 : 1);

  /*This loop will find the difference between each number and the one that follows
  and push it into the resultsArith array.*/
  for(let i = 0; i < arrayDecend.length - 1; i++) {
      resultsArith.push(arrayDecend[i] - arrayDecend[i+1]);
  }
  /*This loop will divide each number by the number that follows it in the array.
  The result of each division is then pushed to the resultsGeo array.*/
  for(let i = 0; i < arrayDecend.length - 1; i++) {
      resultsGeo.push(arrayDecend[i] / arrayDecend[i+1]);
  }

  /*This will check to see if all of the subtraction results are the same.  If
  they are all the same, then the result of the function is Aritmetic.*/
  const arith = resultsArith.every(num => num === resultsArith[0]);
  /*This will check to see if all of the division results are the same.  If they
  are all the same, then the result of the function is Geometric.*/
  const geo = resultsGeo.every(num => num === resultsGeo[0]);

  if(arith) {
      return 'Arithmetic';
  } else if(geo) {
      return 'Geometic';
  } else {
      return -1;
  }
}
