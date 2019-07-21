
/*Have the function LargestPair(num) take the num parameter being passed and determine
the largest double digit number within the whole number. For example: if num is
4759472 then your program should return 94 because that is the largest double digit
number. The input will always contain at least two positive digits.*/

//My solution:
function LargestPair(num) {
  /*First, convert the number to a string so that it is easier to manipulate*/
    let numStr = num + '';
  /*Both the groupOne & groupTwo arrays will be used to store pairs of numbers found in
  numStr.  The difference is that the first pair of numbers in groupOne will consist
  of the first two digits of numStr while the first pair in groupTwo will consist of
  the 2nd & 3rd digit of numStr.  Two separate loops wil be ran to obtain theese pairs.
  The reason for this is to make sure that all possible pairs of numbers are pulled from
  numStr.*/
    let groupOne = [];
    let groupTwo = [];
    let ans;

 /*The first loop will find pairs of numbers in numStr and begin with the first digit.*/
    for(let i = 0; i < numStr.length; i+=2) {
        let pair = numStr.slice(i, (i+2));
        groupOne.push(+pair);
    }

 /*The second loop will also find pairs of numbers in numStr but will begin with the
 second digit of numStr.*/
    for(let i = 1; i < numStr.length; i+=2) {
        let pair = numStr.slice(i, (i+2));
        groupTwo.push(+pair);
    }

/*The resulting number pairs in groupOne & groupTwo are then combined into one array.*/
    let combined = [...groupOne,...groupTwo];

/*Finally, we'll use Math.max to find highest number pair in combined and return
it as the answer.*/
    ans = Math.max(...combined);
    return ans;
}
