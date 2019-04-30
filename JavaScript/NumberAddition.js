
/*"Have the function NumberSearch(str) take the str parameter, search for all the
numbers in the string, add them together, then return that final number. For example:
if str is "88Hello 3World!" the output should be 91. You will have to differentiate
between single digit numbers and multiple digit numbers like in the example above.
So "55Hello" and "5Hello 5" should return two different answers. Each string will
contain at least one letter or symbol."*/

//My solution:
function NumberAddition(str) {

/*Use a regex pattern to search str for numbers consisting of at least one digit.
The array of matches will be stored in const matches.*/
  const patt = /\d+/g;
  const matches = str.match(patt);

//Convert the stringified digits to numbers and store them in a new array.
  const numbers = matches.map(num => +num);

//Lastly, add the numbers together.
  return numbers.reduce((tot,cur) => {
      return tot + cur;
      },0);
}
