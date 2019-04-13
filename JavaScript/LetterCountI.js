
/*"Have the function LetterCountI(str) take the str parameter being passed and
return the first word with the greatest number of repeated letters. For example:
"Today, is the greatest day ever!" should return greatest because it has 2 e's
(and 2 t's) and it comes before ever which also has 2 e's. If there are no words
with repeating letters return -1. Words will be separated by spaces."*/

//My solution:
function LetterCountI(str) {

/*Create an array consisting of the words in str. The use .map to create an array
of objects that represent each word and store it in const stats.  Each object will
contain the word (txt), it's original index(order), an array consisting of the
letters in the word(letters), and the number of letters that are in the word more
than once(repeats)*/
  const words = str.split(' ');

  const stats = words.map(word => {
      return { txt:word, order: words.indexOf(word), letters:[], repeats:0 };
  });

/*Loop through each word, and then loop through each letter of each word. Using
regex, look for repeat letters in each word.  If a letter is repeated, increase
the word's repeat property by one.*/
  for(let word of stats) {
      for(let letter of word.txt) {
          word.letters.push(letter);
          let patt = new RegExp(`${letter}`,"gi");
	      let matches = word.txt.match(patt);
	      matches.length > 1 ? word.repeats++ : word.repeats += 0;
      }
  }

/*Sort the words from the stats array by the number of repeat letters(repeats property)
from greates to least.*/
 stats.sort((a,b) => {
	const { repeats:repLettersA } = a;
	const { repeats:repLettersB } = b;
	if(repLettersA > repLettersB) {
		return -1;
	} else if(repLettersA < repLettersB) {
	    return 1;
	}
})

/*Check to see if the string doesn't contain any wards with repeat letters.*/
let noRepeats = stats.every(word => {
	return word.repeats === 0;
    });

/*Return the word with the most repeat letters.  If there aren't any words with
repeat letters then return -1.*/
if(noRepeats) {
	return -1 ;
  } else {
	return stats[0].txt;
  }
}
