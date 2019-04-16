
/*"Have the function SecondGreatLow(arr) take the array of numbers stored in arr
and return the second lowest and second greatest numbers, respectively, separated
by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should
be 12 98. The array will not be empty and will contain at least 2 numbers. It can
get tricky if there's just two numbers!"*/

//My solution:
function SecondGreatLow(arr) {
    //Arrange the array lowest to highest
    const lowToHigh = [...arr].sort((a,b) => a < b ? -1 : 1);
    //Arrange the array highest to lowest
    const highToLow = [...arr].sort((a,b) => a > b ? -1 : 1);
    //Find the lowest number in the array
    const low = Math.min(...arr);
    //Find the highest number in the array
    const high = Math.max(...arr);
    let secondLow, secondHigh;

    if(arr.length > 2) {
    /*If the array contains more than two numbers, then the second lowest number
    in the lowToHigh array is the first number that is not  equal to the lowest
    number in the array.*/
    for(let num of lowToHigh) {
        if(num !== low) {
            secondLow = num;
            break;
        }
    }
    /*If the array contains more than two numbers, then the second highest number
    in the highToLow array is the first number that is not  equal to the highest
    number in the array.*/
    for(let num of highToLow) {
        if(num !== high) {
            secondHigh = num;
            break;
       }
   }
} else {
    secondLow = high;
    secondHigh = low;
}

    const ans = `${secondLow} ${secondHigh}`;
    return ans;


}
