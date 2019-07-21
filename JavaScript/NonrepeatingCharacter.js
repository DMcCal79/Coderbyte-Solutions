
/*Have the function NonrepeatingCharacter(str) take the str parameter being passed,
which will contain only alphabetic characters and spaces, and return the first
non-repeating character. For example: if str is "agettkgaeee" then your program
should return k. The string will always contain at least one character and there
will always be at least one non-repeating character.*/

//My solution:
function NonrepeatingCharacter(str) {
    let ans;
/*At each iteration of the loop, a Regex will be created(char) for the current letter
being evaluated and then .match is used to look for any matches for char in str.
Any matches found are then stored in repeats.*/
  for(let letter of str) {
      let char = new RegExp(`${letter}`, 'g');
      let repeats = str.match(char);
/*If the length of the repeats array is only 1, then the current letter being
evaluated is stored in ans and the loop is stopped.*/
      if(repeats.length === 1) {
      ans = letter;
      break;
     }

  }
/*Finally, ans is returned as the solution*/
     return ans;
}
