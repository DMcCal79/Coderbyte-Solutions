
/*"Have the function VowelCount(str) take the str string parameter being passed
and return the number of vowels the string contains (ie. "All cows eat grass
and moo" would return 8). Do not count y as a vowel for this challenge."*/

//My solution:
function VowelCount(str) {
  /*Use a regex to test the string for any vowels and then store the matches in
  var vowels.  The vowels variable is an array of matches and the length of this array
  will give you the number of vowels found.*/
    var test = /[aeiou]/gi;
    var vowels = str.match(test);
    return vowels.length;

}
