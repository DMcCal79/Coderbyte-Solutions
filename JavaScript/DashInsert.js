
/*"Have the function DashInsert(str) insert dashes ('-') between each two odd numbers
in str. For example: if str is 454793 the output should be 4547-9-3. Don't count
zero as an odd number."*/

//My solution:
function DashInsert(str) {

//Convert str into an array of stringified numbers
let numStr = (str+'').split('');
for(let i = 0; i<numStr.length; i++) {
/*On each iteration, use a regex to see if the number (i) and the number next to
it (i+1) are odd numbers.  If so, then insert a '-' between them.*/
const patt = /[13579]/;
if((patt.test(numStr[i])) && (patt.test(numStr[i+1]))){
	 numStr.splice((i+1),0,'-');
}

}
/*Finally, get rid of the commas and return the numbers (with the dashes now added) 
as a single string*/
return numStr.join('');
}
