
/*Have the function TwoSum(arr) take the array of integers stored in arr, and
determine if any two numbers (excluding the first element) in the array can sum
up to the first element in the array. For example: if arr is [7, 3, 5, 2, -4, 8, 11],
then there are actually two pairs that sum to the number 7: [5, 2] and [-4, 11].
Your program should return all pairs, with the numbers separated by a comma, in
the order the first number appears in the array. Pairs should be separated by a
space. So for the example above, your program would return: 5,2 -4,11

If there are no two numbers that sum to the first element in the array, return -1*/

//My solution:
function TwoSum(arr) {
/*Grab the first number of arr and store it in first. Using .shift() will accomplish
this and will also remove it from the array*/
  const first = arr.shift();
/*Setup an array (results) that we can store our pairs of numbers that add up to
equal first*/
  let results = [];
	let ans;
/*I went with a nested loop to solve this challenge.  The outer loop will take each
number of the array and hand it off to the inner loop which will check and see if it
can be combined with any of the remaining numbers of the array to equal first (the
first number of the original array). If so, then that pair of numbers are put in
their own array and pushed to the results array. */
    for(let [i,num] of arr.entries()) {
/*For each iteration of the outter loop, the remaining numbers of the array to be
iterated over by the inner loop are stored in chunk. This allows for cleaner code
in the inner for loop.*/
        let chunk = arr.slice(i+1);
        for(let i = 0; i < chunk.length; i++) {
            if(num + chunk[i] === first) {
                results.push([num,chunk[i]]);
                break;
            }
        }
    }
/*If no pairs of numbers are found, then return -1*/
    if(results.length === 0){
        ans = -1;
    } else {
/*Join the nested arrays of number pairs togehter with a space inbetween*/
        ans = results.join(' ');
    }

	return ans;

}
