
/*"Have the function ArrayMatching(strArr) read the array of strings stored in
strArr which will contain only two elements, both of which will represent an array
of positive integers. For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"],
then both elements in the input represent two integer arrays, and your goal for
this challenge is to add the elements in corresponding locations from both arrays.
For the example input, your program should do the following additions: [(1 + 5),
(2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. Your program should
finally return this resulting array in a string format with each element separated
by a hyphen: 6-4-13-17.

If the two arrays do not have the same amount of elements, then simply append the
remaining elements onto the new array (example shown below). Both arrays will be
in the format: [e1, e2, e3, ...] where at least one element will exist in each
array."*/

//My solution:
function ArrayMatching(strArr) {
//Establish a regex that looks for a series of at least one number.
    const patt = /\d+/g;
/*Use destructuring to separate strArr into two separate elements.*/
    let [ arr1, arr2 ] = strArr;
/*Convert each element into an array of sringified numbers using the regex pattern
established earlier in patt. Then, convert each array from stringified numbers into
actual numbers using map.*/
    let numArr1 = arr1.match(patt)
            .map(num => parseInt(num));
    let numArr2 = arr2.match(patt)
            .map(num => parseInt(num));
    let intArray = [];
/*Push both of the newly formed number arrays into inArray so that they can be
sorted.  If one array is shorter than the other, then it will be moved to the
first position. This will later make it easier to attach any remaiing numbers from
the longer array to the end of the answer if there aren't any numbers left to add
to them.*/
    intArray.push(numArr1,numArr2);
    intArray.sort((a,b) => {
            if (a.length < b.length) {
                return -1;
            } else {
                return 1;
            }
        });
//The sumArr will be used to hold our final answer.
    let sumArr = [];
/*Use a for of loop iterate thourgh the first array (intArray[0]) and add the
corresponding index of the second array (intArray[1]) togehter and push each sum
into sumArr.*/
   for(let [i,num] of intArray[0].entries()) {
        let sum = intArray[0][i] + intArray[1][i];
        sumArr.push(sum);
   }
/*Next, check and see if the length of sumArr is shorter than the second array
(intArray[1]) so that any left over numbers can simply be attached to the end of
sumArr.*/
   if(intArray[1].length > sumArr.length) {
       const extras = intArray[1].slice((sumArr.length));
       sumArr.splice(sumArr.length,0,...extras);

   }
//Finally, convert the sumArr to a string with a dash between each number.
   return sumArr.join('-');

}
