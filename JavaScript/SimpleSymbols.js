
/*"Have the function SimpleSymbols(str) take the str parameter being passed and
determine if it is an acceptable sequence by either returning the string true or
false. The str parameter will be composed of + and = symbols with several letters
between them (ie. ++d+===+c++==a) and for the string to be true each letter must
be surrounded by a + symbol. So the string to the left would be false. The string
will not be empty and will have at least one letter."*/

//My solution:
function SimpleSymbols(str) {

  const symCodes = {
    a: 'a'.charCodeAt(0),
    z: 'z'.charCodeAt(0),
    A: 'A'.charCodeAt(0),
    Z: 'Z'.charCodeAt(0),
    equalSign: '='.charCodeAt(0),
    plusSign: '+'.charCodeAt(0)
  };
 /*Destructure the symbol codes into easier to read variables*/
  const { a, z, A, Z, equalSign, plusSign } = symCodes;

 /*Obtain the character codes for each character and push it into the
 strCodes array*/
  let strCodes = [];
  for(const sym of str){
      strCodes.push(sym.charCodeAt(sym));
  }
 /*Automatic fail if the string is less than 3 characters*/
  if (strCodes.length < 3) {
      return false;
  }
 /*Check to make sure each sting is either a letter(lowercase or uppercase), equal
 sign, or plus sign*/
  const strPass = strCodes.every(char => {
      return ((char >= a) && (char <= z )) || ((char >= A) && (char <= Z)) || (char === equalSign) || (char === plusSign);
  });

  const patt = /[+][a-z][+]/i;
  const testPatt = /.{1}[a-z].{1}/gi;
 /*Look for letters that have another character on each side. Then, test to see
 if the characters on either side ar '+' symbols. Then push the result of this test
 (true or false) into the testResults array.  If all the results are true, then ans
 will be true and the result of the SimpleSymbols function will return 'true' meaning
 that every letter as a '+' on each side.*/
  if(strPass) {
      let testResults = [];
      let testCases = str.match(testPatt);
      for(const result of testCases) {
          testResults.push(patt.test(result));
      }
      let ans = testResults.every(result => result === true);
      return ans;
     };
};
