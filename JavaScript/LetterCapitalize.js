
/*"Have the function LetterCapitalize(str) take the str parameter being passed and
capitalize the first letter of each word. Words will be separated by only one space."*/

//My solution:
function LetterCapitalize(str) {
  /*Convert the string into an Array and map over it capitalizing the first letter
  of each word */
    const words = str.split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1));
  //Get rid of the commas and separate each word only with a space
        str = words.join(' ');
  return str;

}
