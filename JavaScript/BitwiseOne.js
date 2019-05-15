
/*"Have the function BitwiseOne(strArr) take the array of strings stored in strArr,
which will only contain two strings of equal length that represent binary numbers,
and return a final binary string that performed the bitwise OR operation on both
strings. A bitwise OR operation places a 0 in the new string where there are zeroes
in both binary strings, otherwise it places a 1 in that spot. For example: if strArr
is ["1001", "0100"] then your program should return the string "1101" "*/

//My solution:
function BitwiseOne(strArr) {
  //Destructure strArr into two binary strings and store them in a and b
  let [ a,b ]  = strArr;
  /*Use parsInt to convert each binary string into a number by passing the radix
  2 as the second parameter.  The bitwise OR operation is then performed on both
  numbers and the result is converted back into a binary string by using toString(2).
  The 2 that is passed into toString represents the radix used to convert to
  binary. */
  let combinedNum = (parseInt(a,2) | parseInt(b,2)).toString(2);
  return combinedNum;
}
