
/*Have the function BitwiseTwo(strArr) take the array of strings stored in strArr,
which will only contain two strings of equal length that represent binary numbers,
and return a final binary string that performed the bitwise AND operation on both
strings. A bitwise AND operation places a 1 in the new string where there is a 1
in both locations in the binary strings, otherwise it places a 0 in that spot. For
example: if strArr is ["10111", "01101"] then your program should return the
string "00101" */

//My solution:
function BitwiseTwo(strArr) {
//Use destructuring to store each binary string in it's own variable (a,b)
    let [ a,b ] = strArr;
/*Using parseInt() with a 2 radix will convert each binary string into a number. 
Then you can use the AND bitwise operator(&) to perform the bitwise AND operation
on both numbers and store the result in andOp. */
    let andOp = parseInt(a,2) & parseInt(b,2);
/*Finaly, convert the answer stored in andOp back into a binary string.*/
    let ans =  andOp.toString(2);
    return ans;
}
