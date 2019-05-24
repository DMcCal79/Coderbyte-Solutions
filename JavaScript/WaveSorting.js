
/*"Have the function WaveSorting(arr) take the array of positive integers stored
in arr and return the string true if the numbers can be arranged in a wave pattern:
a1 > a2 < a3 > a4 < a5 > ..., otherwise return the string false. For example, if
arr is: [0, 1, 2, 4, 1, 4], then a possible wave ordering of the numbers is:
[2, 0, 4, 1, 4, 1]. So for this input your program should return the string true.
The input array will always contain at least 2 elements. More examples are given
below as sample test cases."*/

//My solution:
function WaveSorting(arr) {

//First, sort the array from highest to lowest
  let sortedArr = arr.sort((a,b) => {
      return b - a;
  })

/*If you picture an actual wave, the peak is the highest point of the wave while
the trough is the lowest.  We first determine the number of peaks by dividing the
length of arr by 2.  If the length is an odd number, the we round up the answer
using Math.ceil() since there will be one more peak than there are troughs for odd
length arrays.*/
  const numOfPeaks = Math.ceil(((arr.length)/2));
//Create an array of the peaks
  const peaks = sortedArr.slice(0,numOfPeaks);
//Create an array of the troughs
  const troughs = sortedArr.slice(numOfPeaks);
//The final result (true or false) will be stored in answer
  let answer;
/*Setup an array that we can use to combine the peaks and troughs in an alternating
fashion to see if they can form a wave matching the desired pattern of high,low,high,
low..etc.  Some arrays can have several different combinations that can result in
a wave.  However, every array that can produce a wave will need to at least be able
to do so with peaks and troughs first arranged in decending order and then combined
in an alternating fashion.  That's why I'm choosing this pattern to test with. Go
ahead and place the troughs in there using a spread operator.*/
  let waves = [...troughs];
/*Now add in the peaks by using a for of loop and splice.  This will allow you to insert
a peak before each trough.*/
  for(let [i,peak] of peaks.entries()) {
      waves.splice((i*2),0,peak);
  }
/*Finally, we'll use a for loop to determine if the array can produce a wave.  However,
we must first determine if the array length is odd or even. This will determine which
for loop to use*/

//This for loop will be used if the array length is odd.
  if(waves.length % 2 !== 0) {
    for(let i=1; i < waves.length; i+=2) {
          if((waves[i-1] > waves[i]) && (waves[i] < waves[i+1])) {
            answer = true;
            } else {
                answer = false
                break;
              }
            }
          }
//This for loop will be used if the array length is even.
  if(waves.length % 2 === 0) {
    for(let i=1; i < waves.length; i+=2) {
         if(((waves[i-1] > waves[i]) && (waves[i] < waves[i+1])) || ((waves[i-1] > waves[i]) && (i === waves.length - 1))) {
             answer = true;
             } else {
                answer = false;
                break;
              }
            }
          }
   return answer;
 }
