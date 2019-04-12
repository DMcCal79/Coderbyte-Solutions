
/*"Have the function ArrayAdditionI(arr) take the array of numbers stored in arr
and return the string true if any combination of numbers in the array (excluding
the largest number) can be added up to equal the largest number in the array,
otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3]
the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be
empty, will not contain all the same elements, and may contain negative numbers."*/

//My solution:
function ArrayAdditionI(arr) {
/*Find the largest number in the array and store in const largest.  Then remove
it from the array*/
    const largest = Math.max(...arr);
    arr.splice(arr.indexOf(largest),1);
/*The shuffle() will take the number at the beginning of the array and move it to
the end*/
    function shuffle(arr){
    	let front = arr.shift();
    	arr.push(front);
    	return arr;
    }
/*After each iteration of the outer while loop, start a for of loop that will start
to add the numbers of the array starting at the beginning.  Once the total equals
the largest number that was initially in the array (const largest) then return true.
If the total is greater than const largest, then move to the next iteration of the
outer while loop and run the for of loop again.  If none of the combinations of numbers
(all iterations of the outer while loop) equal const largest, then return false.*/
    let i = 0;
  	while(i < arr.length) {
  	shuffle(arr);


    let tot = 0;
    for(let num of arr) {
        tot += num;
        if(tot === largest) {
            return true;
        }
    }
	i++;
}
    return false;
}
