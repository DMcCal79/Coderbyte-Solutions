
/*"Have the function CountingMinutesI(str) take the str parameter being passed
which will be two times (each properly formatted with a colon and am or pm)
separated by a hyphen and return the total number of minutes between the two times.
The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am
then the output should be 60. If str is 1:00pm-11:00am the output should be 1320."*/

//My solution:
function CountingMinutesI(str) {
/*Separte the two times entered into begin and end.  Then, using regex, convert
each time into the the format "hh:mm:am" or "hh:mm:pm". Next, using destructuring,
convert each time into an object with the properties hour, minutes, and part of
day.  This will make time easier to work with.*/
 const [ begin,end ] = str.split('-');
 const patt = /(\D{2})/;
 const beginMod = (begin.replace(patt, ':$1')).split(':');
 const endMod = (end.replace(patt, ':$1')).split(':');
 const [ beginHr,beginMn,beginPod ] = beginMod;
 const [ endHr,endMn,endPod ] = endMod;
 const timeOne = {
                   hour:parseInt(beginHr),
                   minutes: parseInt(beginMn),
                   partOfDay:beginPod
                 };

 const timeTwo = {
                   hour:parseInt(endHr),
                   minutes: parseInt(endMn),
                   partOfDay:endPod
                };

 function findTotalMin(timeObj) {
     let timeInMin;
     //If the time is midnight, then total minutes is 1440
     if(timeObj.hour === 12 && timeObj.minutes === 0 && timeObj.partOfDay === 'am') {
         timeInMin = 1440;
     /*If it's still the midnight hour but past midnight, then total minutes is
     simply just the minutes property.*/
     } else if(timeObj.hour === 12 && timeObj.minutes >= 1 && timeObj.partOfDay === 'am') {
         timeInMin = timeObj.minutes;
     //If it's the noon hour, then total minutes is 720 plus the minutes property.
     } else if(timeObj.hour === 12 && timeObj.partOfDay === 'pm') {
         timeInMin = 720 + timeObj.minutes;
     /*If it's past the midnight hour but still in the am, then the total minutes
     is the hour property * 60 plus the minutes property*/
     } else if (timeObj.partOfDay === 'am') {
         timeInMin = (timeObj.hour * 60) + timeObj.minutes;
     /*If it's past the noon hour but still in the pm, then the total minutes
     is the (hour property * 60) plus 720 plus the minutes property*/
     } else {
         timeInMin = (timeObj.hour * 60) + 720 + timeObj.minutes;
     }
     return timeInMin;
    }
 //Total minutes for the begin time
 const totalBeginMin = findTotalMin(timeOne);
 //Total minutes for the end time
 const totalEndMin = findTotalMin(timeTwo);
/*If the start time is in pm but end time is in the am (past midnight), then
simply subtract the start time from 1440 and then add it to the end time. Otherwise,
subtract the begin time from the end time to get the final answer (time in minutes)*/
 if(totalEndMin < totalBeginMin) {
     return (1440 - totalBeginMin) + totalEndMin;
 } else  {
     return totalEndMin - totalBeginMin;
 }
}
