
/*Have the function LongestIncreasingSequence(arr) take the array of positive
integers stored in arr and return the length of the longest increasing subsequence
(LIS). A LIS is a subset of the original list where the numbers are in sorted order,
from lowest to highest, and are in increasing order. The sequence does not need to
be contiguous or unique, and there can be several different subsequences. For
example: if arr is [4, 3, 5, 1, 6] then a possible LIS is [3, 5, 6], and another
is [1, 6]. For this input, your program should return 3 because that is the length
of the longest increasing subsequence.*/

//My solution:
function LongestIncreasingSequence(arr) {

//The lengths array will contain the lengths of each increasing sequence
    let lengths = [];
//The sequence array will countain the increasing sequence for the current iteration
    let sequence = [];

    function rackEm(curArray) {
            let begin = curArray[0];
/*Go ahead a push the first number of the current array being evaluated into the
sequence array*/
            sequence.push(begin);
/*Next, use the second number of the array being evaluated as the starting point
for the for loop*/
            for(let i = 1; i < curArray.length; i++) {
/*The purpose of prevDiff is to find the difference between the current number of the
iteration and the number two spots before it.*/
      			let prevDiff = curArray[i] - curArray[i-2];
/*If the current number being iterated over is greater than the most recent number
of the sequence (begin variable) then push it to the sequence array and set begin to
be the current number.*/
                  if(curArray[i] > begin){
                      sequence.push(curArray[i])
                      begin = curArray[i];
/*If the current number being iterated over is less than the most recent number of
the sequemce (begin), check and see if it's greater than the next most recent number of
the sequence (next to last number).  If it is greater, check and see if the difference
(prevDiff) is less than the the difference of the most recent number of the sequence (begin)
and the next to last number.  If it is less, then replace the most recent number of
the sequence with the current number being iterated over.  For example, if the array
being evaluated is [1,2,3,7,4], this will change the sequence from [1,2,3,7] to
[1,2,3,4].*/
                  } else if((prevDiff < (begin - curArray[i-2])) && (prevDiff > 0)) {
                      sequence.splice((sequence.length-1),1,curArray[i])
                      begin = curArray[i];
                  }
              }
          }

/*I decided to go with a nested loop to solve this challenge and used a for of
loop as the outer loop.  Each iteration of the outer loop will drop the first number
of the array and evauluate the remaing portion of the array.  The rackEm function
above is applied to each number of the portion of the array that is currently being
evauluated and the resulting sequence is stored in the sequence array. */
    for(const [i,num] of arr.entries()) {
      let curArray = arr.slice(i);
    	rackEm(curArray);
/*The length of the resulting sequence at each iteration of the outer loop is then
pushed to the lengths array.  The sequence array is then emptied in preparation for
the next iteraiton.*/
    	lengths.push(sequence.length);
    	sequence = [];

    }
/*Once the outer loop has finished running, the longest sequence length (highest
number in lengths array) is returned.*/
        return Math.max(...lengths);
    }
