
/*"Have the function WordCount(str) take the str string parameter being passed
and return the number of words the string contains (e.g. "Never eat shredded wheat
or cake" would return 6). Words will be separated by single spaces."*/

//My solution:
function WordCount(str) {
/*Using .split(' ') will convert the string into an array by separating the string
on each blank space. Finding the length of the newly created array will give you
the number of words in the string.*/  

  const words = str.split(' ');
  const count = words.length;
  return count;

}
