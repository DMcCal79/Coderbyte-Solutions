
/*Have the function ProductDigits(num) take the num parameter being passed which
will be a positive integer, and determine the least amount of digits you need to
multiply to produce it. For example: if num is 24 then you can multiply 8 by 3
which produces 24, so your program should return 2 because there is a total of
only 2 digits that are needed. Another example: if num is 90, you can multiply 10 * 9,
so in this case your program should output 3 because you cannot reach 90 without
using a total of 3 digits in your multiplication.*/

//My solution:
function ProductDigits(num) {
/*The combos array will be where we store each pair of numbers that can be multiplied
together to equal num*/
let combos = [];
let divideBy = 1;
let results;
let ans;
/*I decided to go with recursion to solve this challenge. The division function will
check to see if divideBy (divisor) will divide into num without any remainder.  If so,
then the result of the division and the divisor (divideBy) are stored in an array (ans)
and then pushed into combos.  The .join() is used to remove the comma between the pair 
and change it to one number. Next, divideBy is increased by one and the divison calls
itself (recursion) again.  The division function will continue to call istself until
divideBy is greater than num. */
function division(num) {
    if (divideBy > num) return;
    if(num % divideBy === 0) {
        let ans = num/divideBy;
        combos.push([divideBy,ans].join(''))
    }
    divideBy++;
    division(num);
}

division(num)
/*The combos array is then transformed into an array consisting of the lengths of each
solution.  The resulting array is stored in results.*/
results = combos.map(result => result.length);
/*Finally, the smaillest number(shortest length) is found and returned.*/
ans = Math.min(...results);
return ans;

}
