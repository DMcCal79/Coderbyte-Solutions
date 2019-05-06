
/*"Have the function OffLineMinimum(strArr) take the strArr parameter being passed
which will be an array of integers ranging from 1...n and the letter "E" and return
the correct subset based on the following rules. The input will be in the following
format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E
means take out the smallest integer currently in the whole set. When finished, your
program should return that new set with integers separated by commas. For example:
if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should
return 4,1,5."*/

//My solution:
function OffLineMinimum(strArr) {

    let numbers = [];
    let ans = [];

/*For each iteration, if the character is a number, then it is moved to the numbers
array.  If a character is an 'E', then the smallest number in the numbers array
until that point is moved to the ans array.*/
    for(let str of strArr) {
        if(str === "E") {
            let lowest = Math.min(...numbers);
            let lowIndex = numbers.indexOf(lowest);
            ans.push(...numbers.splice(lowIndex,1));

        } else {
//if the character is not a letter "E", then it is pushed to the numbers array.
            numbers.push(parseInt(str));
        }
    }

    return ans.join();

}
