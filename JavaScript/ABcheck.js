
/*"Have the function ABCheck(str) take the str parameter being passed and return
the string true if the characters a and b are separated by exactly 3 places anywhere
in the string at least once (ie. "lane borrowed" would result in true because there
is exactly three characters between a and b). Otherwise return the string false."*/

//My solution:
function ABCheck(letters) {

var first = 0;
var second = 5;
var patA = /a/i;
var patB = /b/i;
var pass = false;

/*Loop through the string looking at 5 characters at a time. If the chunk of 5 characters
doesn't start with an 'a' and with 'b', then increase the index of chunk by 1 and
re-evaluate the next chunk. Once the criteria is met, break the loop and change the value
of the pass variable to true and return the pass variable.  If no match is found,
then the value of the pass variable remains false and is returned.*/

while(second <= letters.length) {

    var chunk = letters.slice(first,second);

    if(patA.test(chunk[0]) && patB.test(chunk[4])) {
                    pass = true;
                    break;
        } else {

        first++;
        second++;
      }
    }
return pass;

}
