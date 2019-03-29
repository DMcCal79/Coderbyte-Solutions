
/*"Have the function LetterChanges(str) take the str parameter being passed and
modify it using the following algorithm. Replace every letter in the string with
the letter following it in the alphabet (ie. c becomes d, z becomes a). Then
capitalize every vowel in this new string (a, e, i, o, u) and finally return this
modified string."*/

//My solution:
function LetterChanges(str) {

  const codes = [];
  for(var i = 0; i < str.length; i++) {
      codes.push(str.charCodeAt(i));
  };
  const letters = codes
    .map((letter) => {
  /*If the letter is 'z' or 'Z', then it will be changes to 'a' or 'A'*/
        if((letter === 90) || (letter === 122)) {
            return letter - 25;
        }
  /*Change each letter to the next one in the alphabet*/
        if(((letter >= 65) && (letter <= 89)) || ((letter >= 97) && (letter <= 121))){
            return letter + 1;
        }
        return letter;
    })
    .map(letter => String.fromCharCode(letter)).join('');
  /*Capitalize each vowel*/
    return letters.replace(/[aeiou]/g, l => l.toUpperCase());

}
