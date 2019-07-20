
/*Have the function NextPalindrome(num) take the num parameter being passed and
return the next largest palindromic number. The input can be any positive integer.
For example: if num is 24, then your program should return 33 because that is the
next largest number that is a palindrome.*/

//My solution:
function NextPalindrome(num) {
/*We'll want to start this with the next number up from num.  This way if the number
entered is already a palindrome then it won't return itself. For example, if 22
is entered then 33 will be returned instead of 22.*/
    let numUpOne = num + 1;
    let ans;
/*The findMatch function will check and see if the current number being evaluated
will equal itself if it is flipped backwards (palindrome)*/
        function findMatch(numUpOne) {
/*First, numUpOne is converted to a string so that it will be easier to manipulate.*/
            let patt = numUpOne+ ''
/*Next, we'll need to reverse the order of the digits of numUpOne and store it as pattRev.*/
            let pattRev = patt.split('')
                            .reverse()
                            .join('');
/*If numUpOne is just a single digit, then it is returned as the answer.*/
            if((numUpOne > 0) && (numUpOne < 9)) {
                ans = numUpOne;
                return;
            }
/*If the current number being evaluated(patt) equals itself reversed(pattRev) then
it is returned as the answer.*/
            if(patt === pattRev) {
                ans = patt;
                return;
            }
/*Finally, recursion is used to call the function again for the next number up if
no match is found.  This approach is a little cleaner than using a loop.*/
            findMatch(numUpOne+1);
        }
    findMatch(numUpOne);
    return ans;
}
