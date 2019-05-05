
/*"Have the function MultiplicativePersistence(num) take the num parameter being
passed which will always be a positive integer and return its multiplicative
persistence which is the number of times you must multiply the digits in num until
you reach a single digit. For example: if num is 39 then your program should return
3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4."*/

//My solution:
function MultiplicativePersistence(num) {

  let counter = 0;

/*The numMult function will separate the num passed into an array of single digits.
This is done by converting num to a string, spliting the stringified number into an
array of single digits, then converting each stringified digit back into a number.
These digits are then multiplied by each eachother using reduce(). */
  function numMult(num) {
      num = (num + '').split('').map(number => parseInt(number))
                           .reduce((tot,cur) => tot * cur);
      return num;

  }

/*Using a while loop to check and see if the length of num is greater than 1. If so,
then num is ran througn the numMult function as many times as necessary to get it
down to a single digit*/

  while((num + '').length > 1) {
      num = numMult(num);
      counter++;
  }

//Once num is down to a single digit, then the final value of counter is returned
  return counter;

}
