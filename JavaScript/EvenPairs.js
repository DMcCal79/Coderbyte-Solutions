
/*Have the function EvenPairs(str) take the str parameter being passed and determine
if a pair of adjacent even numbers exists anywhere in the string. If a pair exists,
return the string true, otherwise return false. For example: if str is "f178svg3k19k46"
then there are two even numbers at the end of the string, "46" so your program should
return the string true. Another example: if str is "7r5gg812" then the pair is
"812" (8 and 12) so your program should return the string true.*/

//My solution:
function EvenPairs(str) {

/*First, establish a regex patterm that looks for any series of numbers that is
two or greater and store each match in the numbs array*/
  const patt = /\d{2,}/g;
  const numbs = str.match(patt);
  let ans = false;
/*If the string (str) that is being passed doesn't contain any numbers at all, then
simply return false and stop the function alltogether.*/
  if(!numbs) { return ans }
/*Next, map over numbs and convert each series of matches into an array.  You will
now have an array of arrays that is stored in numArray.*/
  let numArray = numbs.map((num) => Array.from(num));
/*I decided to go with a nested loop to solve this challenge. The outer loop iterates
over each array of matches stored in numArray.*/
  for(let arr of numArray) {
      let a, b, first, second;
/*The inner loop iterates over each number of a match array.  It will first find
the longest even number possible. At each iteration, the next digit of the array
is concatenated (via .join) and the resulting number series is checked to see if
can be divided evenly be two. At each iteration, if the number series is even then
it is stored in a and the remaining numbers in b. The a and b variables may get
overwritten at each iteration if the the new concatenated number is even.  If not,
then they'll remain unchanged.*/
     for(let [i,num] of arr.entries()) {
         if(+(arr.slice(0,i+1).join('')) % 2 === 0) {
             a = arr.slice(0, i+1).join('');
             b = arr.slice(i+1).join('');
           }
/*In some situations, the entire number series can be concatenated into one even
number resulting in just one number instead of two. To prevent this from happening,
one last check of the inner loop is to see if a equals the same length of the number
series being evaluated.  If it doesn't, then var first is set to a and var second
is set to b.  For example, 5678 would result in 56, 78 instead of 5678.*/
    	   if((a+'').length !== arr.length) {
    		   first = a;
    		   second = b;
           }
        }
/*After each inner loop has ran, the outer loop with check and see of the pair of
numbers passed to first and second are both even.  If they are, then ans is flipped
from false to true and the outer loop will stop running.  If there aren't any pairs
of even numbers found, then ans will remain false.*/        
    if((first % 2 === 0) && (second % 2 === 0)) {
       ans = true;
       break;
     }

   }
  return ans;

}
