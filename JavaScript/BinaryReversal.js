
/*"Have the function BinaryReversal(str) take the str parameter being passed,
which will be a positive integer, take its binary representation (padded to the
nearest N * 8 bits), reverse that string of bits, and then finally return the new
reversed string in decimal form. For example: if str is "47" then the binary version
of this integer is 101111 but we pad it to be 00101111. Your program should reverse
this binary string which then becomes: 11110100 and then finally return the decimal
version of this string, which is 244."*/

//My solution:
function BinaryReversal(str) {

/*Convert str to a number just in case a stringified number is passed into the
function*/
  let numStr = parseInt(str);
//Get the binary form of the number that was passed and store it in numBin
  let numBin = numStr.toString(2);
/*Find the length of of numBin, divide it by 8, and then round the answer up to
nearest integer.  This will later help us determine how many '0's will be needed to pad
numBin to the nearest N * 8 bits. Store the result in divEight*/
  let divEight = Math.ceil(numBin.length / 8);
/*Multiply divEight by 8 to give us the total number of bits that we'll need in the
binary form (numBin) before we reverse the order.*/
  let roundEight = divEight * 8;
/*Subtract the length of numBin from the the total number of bits needed (roundEight).
The result of the subtraction will tell us the number of '0's needed to pad numBin.*/
  const numToGo = roundEight - numBin.length;
/*Establish addOn to store the '0's that we'll be padding numBin with.*/
  let addOn = '';
/*Use a for loop to build the padding that will be used to add to numBin.  Each
iteration will add a '0' to addOn.*/
  for(let i = 0; i < numToGo; i++) {
      addOn += '0';
  }
/*Combine the necessary padding (addOn) with numBin and store the resulting binary
string in padEight. Our binary string is now padded to the nearest N * 8 bits.*/
  let padEight = addOn + numBin;
/*Convert padEight into an array so that it can then be reversed.*/
  const rev = (padEight.split('')).reverse();
/*Re-form the now reversed array back into a binary string.  Our original binary
string has now had the necessary padding added and then reversed.  Finally, it is
then converted back into decimal form via parseInt. The final result is then stored
in ans.*/
  const ans = parseInt((rev.join('')),2);


  return ans;


}
