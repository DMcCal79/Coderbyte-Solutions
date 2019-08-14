
/*Have the function BasicRomanNumerals(str) read str which will be a string of
Roman numerals. The numerals being used are: I for 1, V for 5, X for 10, L for 50,
C for 100, D for 500 and M for 1000. In Roman numerals, to create a number like 11
you simply add a 1 after the 10, so you get XI. But to create a number like 19, you
use the subtraction notation which is to add an I before an X or V (or add an X
before an L or C). So 19 in Roman numerals is XIX.

The goal of your program is to return the decimal equivalent of the Roman numeral
given. For example: if str is "XXIV" your program should return 24 */

//My solution:
function BasicRomanNumerals(str) {

/*First off, we're going to convert the Roman numeral(str) to an array and store
it in nums*/
let nums = str.split('');
/*We're going to have runningSum keep track of our total as we later iterate through
the digits found in str.*/
let runningSum = 0;
/*We'll need to estabish a key that shows the corresponding digit for reach Roman
numeral.  We'll store this in an object called romans.*/
const romans = {
   I: 1,
   V: 5,
   X: 10,
   L: 50,
   C: 100,
   D: 500,
   M: 1000
};
/*Next, we'll map over nums to get the digits that the Roman numeral consists of.
We'll store these digits in numConv.*/
let numConv = nums.map(num => romans[num]);
/*We'll go ahead and grab the length of the numConv array and store it in numQty.
We'll need this later.*/
const numQty = numConv.length;
/*Next, a for of loop will be used to iterate over each digit in numConv and then
add the appropriate value to our running total stored in runningSum.*/
for(let [i,num] of numConv.entries()){
/*To keep things tidy, were going to name the current number being iterated over(thisNum),
the next number to be iterated over(nextNum), and the previous number that has been
iterated over(prevNum).*/
	let thisNum = numConv[i];
	let nextNum = numConv[i + 1];
	let prevNum = numConv[i - 1];
/*If the first digit in numConv is greater or equal to the next digit, then we'll
simply add it to our running total (currently 0).*/
    if((numConv.indexOf(thisNum) === 0) && (thisNum >= nextNum)) {
        runningSum += thisNum;
/*If the the current digit being interated over is greater or equal to the next
digit but is also less than or equal to the previous digit, then simply add it to
our running total.*/
    } else if((thisNum >= nextNum) && (thisNum <= prevNum)) {
        runningSum += thisNum;
/*If the current digit is less than the next digit, then subtract it from the next
digit and then add the result to our running total. */
    } else if(thisNum < nextNum) {
        runningSum += (nextNum - thisNum);
/*If the last digit in numConv less than or equal to the previous digit, then
simply add it to our running total.*/        
    } else if((i = (numQty - 1)) && (thisNum <= prevNum)) {
        runningSum += numConv[i];
    }
}

return runningSum;
}
