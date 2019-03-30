
/*"Have the function SimpleAdding(num) add up all the numbers from 1 to num. For
example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10.
For the test cases, the parameter num will be any number from 1 to 1000."*/

//My solution:
function SimpleAdding(num) {

  const count = [];
  //Push 1 thru num to the count array
      while(num > 0) {
          count.push(num);
          num--;
  }
  //Add up total of 1 thru num
  num = count.reduce((tot,cur) => {
      return tot + cur;
  },0);
  return num;

}
