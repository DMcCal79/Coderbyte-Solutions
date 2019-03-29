
/*"Have the function LongestWord(sen) take the sen parameter being passed and
return the largest word in the string. If there are two or more words that are the
same length, return the first word from the string with that length. Ignore
punctuation and assume sen will not be empty."*/

//My solution:
function LongestWord(sen) {
var codes = [];
/*Obtain the character code for each character in the sentence and push them into
codes array.*/
for (var i = 0; i < sen.length; i++) {
	var charCode = sen.charCodeAt(i);
	codes.push(charCode);
	}
return codes
/*Filter the codes array to ensure that each character is either a letter (lowercase or uppercase), number, or space. This will make sure that any punctuation marks are
not included.*/
.filter(code => {
    if(((code >= 97) && (code <= 122)) || ((code >= 65) && (code <= 90)) || code === 32 || ((code >= 48) && (code <= 57))) {
    	return code;
    }
    })
/*Convert the character codes into strings, join them together to reassemble the words of the sentence, then separate each word to form an array of words. The array of words is then sorted longest to shortest.*/
.map(code => String.fromCharCode(code))
.join('')
.split(' ')
.sort((a,b) => b.length - a.length)
.shift();

}
