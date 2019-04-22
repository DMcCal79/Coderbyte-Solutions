
/*"Have the function MeanMode(arr) take the array of numbers stored in arr and
return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1]
should return 1 because the mode (3) equals the mean (3)). The array will not be empty,
will only contain positive integers, and will not contain more than one mode."*/

//My solution:
function MeanMode(arr) {

//Find the mean of the array
  const arrMean = (arr.reduce((tot,cur) => {
          return tot + cur;
      },0)) / arr.length;

//Find out how many times each number appears in the array
  const numberFreq = arr.reduce((obj,num) => {
          if(num in obj) {
              obj[num]++;
          } else {
              obj[num] = 1;
          }
          return obj;
      },{});


 const count = [];

//Push total count for each number from numberFreq into the count array
 for(const prop in numberFreq) {
	const freq = numberFreq[prop];
	count.push(freq);
 }

/*Find the highest number in the count array and store it in modePrep. Then find
the number(num) in the numberFreq object that has this number(modePrep) as
it's value.  This will give you the mode.*/
 let modePrep = Math.max(...count);
 let mode;
 for(const prop in numberFreq) {
	if(numberFreq[prop] === modePrep) {
		mode = prop;
    }
 }

//If the mode matches the mean(arrMean), then return 1. Otherwise, return 0.
 if(arrMean == mode){
     return 1;
 } else {
     return 0;
 }

}
