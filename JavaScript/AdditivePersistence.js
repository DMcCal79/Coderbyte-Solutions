
/*"Have the function AdditivePersistence(num) take the num parameter being passed
which will always be a positive integer and return its additive persistence which
is the number of times you must add the digits in num until you reach a single digit.
For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18
and 1 + 8 = 9 and you stop at 9."*/

//My solution:
function AdditivePersistence(num) {

    let counter = 0;

/*The numTotal function will take the digits in num and add them together.  This
is done by converting num into an array of it's digits and using reduce to add
them together*/
    function numTotal(num) {
	    num = (num + '').split('')
	     		.map(num => parseInt(num))
	    		.reduce((cur,tot) => {
	                 return cur + tot;
	                },0);
		return num;
      }

/*The while loop will check to see if num is still greater than a single digit.
If so, then it is run through the numTotal function.  This will be done as
many times as it takes to get num down to one digit.  Each time num is run through
numTotal, counter is increased by one.*/
    while(((num + '').split('')).length >= 2) {
        num = numTotal(num);
        counter++;
    }

/*Once num is down to a single digit, then the final value of counter is returned.*/
    return counter;
}
