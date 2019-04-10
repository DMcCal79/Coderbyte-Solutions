
/*"Have the function Palindrome(str) take the str parameter being passed and return
the string true if the parameter is a palindrome, (the string is the same forward
as it is backward) otherwise return the string false. For example: "racecar" is
also "racecar" backwards. Punctuation and numbers will not be part of the string."*/

//My solution:
function Palindrome(str) {
/*Const backward is the str being reversed.  The first step of .split(' ') is
there just in case the string entered is more than one word.  This will separate
each word in an array so that they can be joined together to form one combined string.
The reversed str (backward) is then converted to a regex (as backtest) to test if it matches
the str that was passed.*/
  const backward = str.split(' ')
                      .join('')
                      .split('')
                      .reverse()
                      .join('');
  const backTest = new RegExp(`${backward}`,'gi');
  return backTest.test(str.split(' ').join(''));

}
