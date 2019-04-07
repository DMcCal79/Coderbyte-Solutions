
/*"Have the function ExOh(str) take the str parameter being passed and return the
string true if there is an equal number of x's and o's, otherwise return the string
false. Only these two letters will be entered in the string, no punctuation or
numbers. For example: if str is "xooxxxxooxo" then the output should return false
because there are 6 x's and 5 o's."*/

//My solution:
function ExOh(str) {
/*Using regular exprssions to create an array of matches for both the x's and o's that
are found in the str. A ternary operator is then used to compare the lengths of the x
and o match arrays.  If the lengths are equal, then true is returned.*/
  const patX = /x/gi;
  const patO = /o/gi;
  const totXs = str.match(patX) || [];
  const totOs = str.match(patO) || [];
  return totXs.length === totOs.length ? true : false;
}
