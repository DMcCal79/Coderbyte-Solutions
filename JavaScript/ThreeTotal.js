/*"Have the function ThreeTotal(arr) take the array of integers stored in arr, and
determine if any three distinct numbers (excluding the first element) in the array
can sum up to the first element in the array. For example: if arr is [8, 2, 1, 4,
10, 5, -1, -1] then there are actually three sets of triplets that sum to the
number 8: [2, 1, 5], [4, 5, -1] and [10, -1, -1]. Your program should return the
string true if 3 distinct elements sum to the first element, otherwise your program
should return the string false. The input array will always contain at least 4
elements."*/

//My solution:

function ThreeTotal(arr) {

  let elements = arr;
  /*Target will be the first number of the array that will serve as the number we're
  trying to sum to with any 3 of the elements remaining in the array. Since we're
  using shift() to get the first number, the array stored in elements will now
  only consist of the remaining elements*/
  const target = elements.shift();
  let ans = 'false';
  let soFar;
  let needed;

 /*We're going to use a nested loop to solve this challenge. The group variable
 will ultimately be an array containing 3 elements that will be checked to see if
 they sum to the number stored in the target variable. With each iteration of the
 outer loop, we'll make the number being iterated over the first element of the
 group array.*/
  for(let [i,num] of elements.entries()){
    let group = [num];
  /*With each iteration of the outer loop, a new array will be formed that will be
  used for the inner loop.  The array (called leftOvers) will be formed by taking
  all the numbers before and after the current iteration of the outer loop and
  joining them together.*/
    let firstNum = i;
    let firstHalf = elements.slice(0,firstNum);
    let secondHalf = elements.slice(firstNum+1);
    let leftOvers = [...firstHalf, ...secondHalf];
  /*With each iteration of the inner loop, the number currently being iterated over
  is pushed to the group array which will now consist of 2 numbers. Then we will
  add these 2 numbers together and store the sum in the variable called soFar.*/
      for(let [i,numTwo] of leftOvers.entries()){
          group.push(numTwo);
          soFar = group.reduce((a,b) => {
          return a + b;
        },0);
 /*Next, we will subtract soFar from our target number and this will give us the
 number that will be needed to reach our target. This number will be stored in
 the variable called needed.*/
      needed = target - soFar;
 /*We will then check the remaning numbers and see if the number stored in needed
 is present.  If it is, then the we'll break out of the loop and return 'true'. If
 not, then we'll remove the second number from group, go to the next iteration of
 the outer loop, and then the next iteration of the inner loop.*/
        let gotThree = leftOvers.some(element => element === needed);
        if (gotThree) {
          ans = 'true';
          break;
        } else {
          group.pop();
        }
      }

 }
 return ans;
}
