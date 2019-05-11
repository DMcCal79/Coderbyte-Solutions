
/*"Have the function HammingDistance(strArr) take the array of strings stored in
strArr, which will only contain two strings of equal length and return the Hamming
distance between them. The Hamming distance is the number of positions where the
corresponding characters are different. For example: if strArr is ["coder", "codec"]
then your program should return 1. The string will always be of equal length and
will only contain lowercase characters from the alphabet and numbers."*/

//My solution:
function HammingDistance(strArr) {

  let counter = 0;
  let [ a,b ] = strArr;
//Convert each string into an array of letters
  let strOne = a.split('');
  let strTwo = b.split('');

/*Loop through each character of strOne and check to see if strTwo has the same character
in the same position.  If it doesn't, then increase counter by one.  The final value
of counter will be the number of positions where the characters did not match in
strOne and strTwo.*/

  for(let [ i,letter ] of strOne.entries()) {
      letter !== strTwo[i] ? counter++ : null;
  }

  return counter;

}
