
/*"Have the function ChangingSequence(arr) take the array of numbers stored in arr
and return the index at which the numbers stop increasing and begin decreasing or
stop decreasing and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1]
then your program should return 3 because 6 is the last point in the array where
the numbers were increasing and the next number begins a decreasing sequence. The
array will contain at least 3 numbers and it may contains only a single sequence,
increasing or decreasing. If there is only a single sequence in the array, then
your program should return -1. Indexing should begin with 0."*/

//My solution:

//First, determine whether the initial sequence is increasing or decreasing.
function ChangingSequence(arr) {
//Is it increasing? If so, then pass arr to the increaseArr function.
  if ((arr[1] - arr[0]) > 0) {
      return increaseArr(arr);
  }
//Is it decreasing? If so, then pass arr to the decreaseArr function.
  if ((arr[1] - arr[0]) < 0) {
      return decreaseArr(arr);
  }

/*This will return the index of the last point where the numbers were increasing.
If the numbers just keep increasng and the pattern doesn't change, then -1 will
be returned.*/
  function increaseArr(arr) {
      let index;
      for(let i = 0; i < arr.length; i++) {
          if(arr[i+1] - arr[i] < 0) {
              index = i;
              break;
          } else {
              index = -1;
          }
      }
      return index;
  }

  /*This will return the index of the last point where the numbers were decreasing.
  If the numbers just keep decreasing and the pattern doesn't change, then -1 will 
  be returned.*/
  function decreaseArr(arr) {
      let index;
      for(let i = 0; i < arr.length; i++) {
          if(arr[i+1] - arr[i] > 0) {
              index = i;
              break;
          } else {
              index = -1;
          }
      }
      return index;
  }

}
