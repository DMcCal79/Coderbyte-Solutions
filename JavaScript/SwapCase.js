
/*"Have the function SwapCase(str) take the str parameter and swap the case of
each character. For example: if str is "Hello World" the output should be hELLO
wORLD. Let numbers and symbols stay the way they are."*/

//My solution:
function SwapCase(str) {

/*Convert str into an array of letters and establish a regex pattern that looks
for lower case letters*/
  const letters = str.split('');
  const pattLower = /[a-z]/g;

/*Create a new array (letterChg) using map to convert the case of each letter.
This is done by using a ternary operator to check if each letter is lower case.
If so, then change the case to upper case. If not, then it must already be upper
case and will need to be converted to lower case.*/
  const letterChg = letters.map(letter => {
      return letter.match(pattLower) ? letter.toUpperCase() : letter.toLowerCase();
  });

//Lastly, combine the letters back into a single string.
  return letterChg.join('');
}
