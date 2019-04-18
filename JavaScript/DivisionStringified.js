
/*"Have the function DivisionStringified(num1,num2) take both parameters being
passed, divide num1 by num2, and return the result as a string with properly
formatted commas. If an answer is only 3 digits long, return the number with no
commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2
is 10000 the output should be "12,346". "*/

//My solution
function DivisionStringified(num1,num2) {

  /*Round the answer to the neareast integer and then establish a regex that looks
  for a pattern of every 3 numbers.*/
    let ans = Math.round(num1 / num2);
    let finalAns;
    const patt = /(\d{3})/g;
  /*Convert the answer to an array of stringified numbers and then reverse it. This
  will allow you to use a regex (const patt) to insert a comma after every 3 numbers
  via the .replace method. Next, reverse the array again to it's original order.
  The answer should now have the commas after every 3 numbers.*/
    finalAns = (ans + '').split('')
                        .reverse()
                        .join('')
                        .replace(patt,'$1,')
                        .split('')
                        .reverse()
 /*If the answer has a comma at the beginning(i.e. ,999,999), then splice can be
 used to get rid of it*/
    if(finalAns[0] === ',') {
           finalAns.splice(0,1);
    }
/*Lastly, join the answer back together again to reform the final answer*/
    return finalAns.join('');
}
