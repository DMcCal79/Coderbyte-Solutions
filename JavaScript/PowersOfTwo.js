
/*"Have the function PowersofTwo(num) take the num parameter being passed which
will be an integer and return the string true if it's a power of two. If it's not
return the string false. For example if the input is 16 then your program should
return the string true but if the input is 22 then the output should be the string
false."*/

//My solution:
function PowersofTwo(num) {

let x = 1;

/*Increase the value of x at each iteration as along as 2 to the x power is less
than or equal fo num.  At each iteration, the if statement will check to see if
2 to the x power equals num.  Once it equals num, then the loop stops and the
result returned is true. If 2 to the x power never equals num, then false is returned.*/
while(Math.pow(2,x) <= num) {

    if(Math.pow(2,x) === num) {
		return 'true';
    }
     x++;
}
    return 'false';

}
