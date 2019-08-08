
/*Have the function PalindromeCreator(str) take the str parameter being passed and
determine if it is possible to create a palindromic string of minimum length 3
characters by removing 1 or 2 characters. For example: if str is "abjchba" then
you can remove the characters jc to produce "abhba" which is a palindrome. For
this example your program should return the two characters that were removed with
no delimiter and in the order they appear in the string, so jc. If 1 or 2 characters
cannot be removed to produce a palindrome, then return the string not possible.
If the input string is already a palindrome, your program should return the string palindrome.

The input will only contain lowercase alphabetic characters. Your program should
always attempt to create the longest palindromic substring by removing 1 or 2
characters (see second sample test case as an example). The 2 characters you remove
do not have to be adjacent in the string. */

//My solution:
function PalindromeCreator(str) {
  let ans;
/*The pass variable will be our flag that will indicate whether a palindrome has
been successfully created. If a palindrome has been created, then it will be flipped
to true.*/
  let pass = false;
  let ltrs;

/*The pdromeCheck function takes a string as a parameter and checks to see if
reversing it will form a palindrome that is at least 3 letters long.  If so, then
pass is flipped to true.*/

  function pdromeCheck(str) {
     let strRev =  str.split('')
                      .reverse()
                      .join('');
     if(strRev === str && strRev.length >= 3) {
         pass = true;
     }
  }

/*The purpose of chop is to first check and see if a palindrome can be formed by
removing just one letter.  If not, it will then check to see if removing two
letters will form a palindrome.*/
  function chop(str) {
//Converting the string to an array using .split('').
    let strArr = str.split('');
/*On each iteration of the for of loop, the letter being iterated over is removed
and the string is reformed without that letter and stored in let word and
the letter that was removed is stored in the ltrs array. The resulting string (stored
in word) is then checked via pdromeCheck to see if a palindrome can be formed. If so,
then then the loop stops running.*/
    for(let [i,char] of strArr.entries()) {
    	  let firstHalf = strArr.slice(0,i);
    	  let secondHalf = strArr.slice(i+1);
    	  let word = ([...firstHalf,...secondHalf]).join('');
    	  ltrs = [strArr[i]];
    	  pdromeCheck(word);
		    if(pass) return;
     }
/*If a palindrome can't be formed by removing one letter, then chop() will check
and see if one can be formed by removing two letters.  First, we'll run the same
for of loop as above only this time a nested loop will be run on each iteration to
check and see if removing a second letter will form a palindrome.*/
    for(let [i,char] of strArr.entries()) {
          let firstHalf = strArr.slice(0,i);
          let secondHalf = strArr.slice(i+1);
          let word = ([...firstHalf,...secondHalf]).join('');
          ltrs = [strArr[i]];
          pdromeCheck(word);

          if(pass) {
            break;
            } else {
/*The nested loop is similar to the outter loop only it is iterating over the word
variable instead of strArr.*/
                    for(let[i,char] of (word.split('')).entries()) {
                        firstHalf = word.slice(0,i);
                        secondHalf = word.slice(i+1);
                        let wordTwo = ([...firstHalf,...secondHalf]).join('');
                        pdromeCheck(wordTwo);
/*If a palindrome is formed by removal of the letter of the current iteration, then
that letter is pushed to the ltrs array which already contains the letter of the
current iteration of the outer loop.  The inner & outer loops are then stopped and
the two letters that are now stored in ltrs are the letters that can be removed
to form a palindrome.*/
                        if(pass) {
                        ltrs.push(word[i]);
                        return;
        }}}}}

  pdromeCheck(str);

/*Before we start removing letters, we need to check and see if the string being
passed is already a palindrome.*/
  if(pass) {
      ans = 'palindrome';
      return ans;
  }
/*If the string being passed is not already a palindrome, then we can check and see
if one can be formed by removing one or two letters via chop(). */
  chop(str);
/*If chop() is able to produce a palindrome, then the letters that chop() has placed
in the ltrs array are retuned as the solution.  If chop() is unable to produce a
palindrome, then 'not possible' is returned.*/
  if(pass) {
      ans = ltrs.join('');
  } else {
      ans = 'not possible';
  }

  return ans;


}
