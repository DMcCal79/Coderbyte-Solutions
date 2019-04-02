
/*"Have the function TimeConvert(num) take the num parameter being passed and
return the number of hours and minutes the parameter converts to
(ie. if num = 63 then the output should be 1:3). Separate the number of hours and
minutes with a colon."*/

//My solution:
function TimeConvert(num) {
//To get the hour:
  const hours = Math.floor(num / 60);
//To get the minutes:  
  const min = num % 60;
  const answer = `${hours}:${min}`;
  return answer;
}
