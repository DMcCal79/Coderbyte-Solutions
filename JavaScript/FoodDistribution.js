
/*Have the function FoodDistribution(arr) read the array of numbers stored in arr
which will represent the hunger level of different people ranging from 0 to 5
(0 meaning not hungry at all, 5 meaning very hungry). You will also have N sandwiches
to give out which will range from 1 to 20. The format of the array will be [N, h1,
h2, h3, ...] where N represents the number of sandwiches you have and the rest of
the array will represent the hunger levels of different people. Your goal is to
minimize the hunger difference between each pair of people in the array using the
sandwiches you have available.

For example: if arr is [5, 3, 1, 2, 1], this means you have 5 sandwiches to give
out. You can distribute them in the following order to the people: 2, 0, 1, 0.
Giving these sandwiches to the people their hunger levels now become: [1, 1, 1, 1].
The difference between each pair of people is now 0, the total is also 0, so your
program should return 0. Note: You may not have to give out all, or even any, of
your sandwiches to produce a minimized difference.

Another example: if arr is [4, 5, 2, 3, 1, 0] then you can distribute the sandwiches
in the following order: [3, 0, 1, 0, 0] which makes all the hunger levels the
following: [2, 2, 2, 1, 0]. The differences between each pair of people is now: 0,
0, 1, 1 and so your program should return the final minimized difference of 2.*/

//My solution:
function FoodDistribution(arr) {

  let nums = arr;
  //Number of sandwiches available
  let wiches = nums.shift();
  //The diffs array will hold the difference between each number pair being evauluated
  let diffs = [];
  //Total number of sandwiches needed
  let wichesNeeded;
  let ans;

      for(let i = 0; i < nums.length; i++) {
/*To make things a little neater, we're going to setup some variables to use in
the if statements.*/
          let prevPerson = nums[i-1];
          let thisPerson = nums[i];
          let nextPerson = nums[i+1];
          let diff;

/*Need to see if the current person's hunger level is greater than the previous
person and also greater than the next person.*/
          if((thisPerson > prevPerson) && (thisPerson > nextPerson)) {
/*Find the difference between the hunger level of the previous person and current
person of the iteration. Also, find the difference in the hunger level of the
current person vs the next person.*/
            const greaterThanPrev = thisPerson - prevPerson;
            const greaterThanNext = thisPerson - nextPerson;
/*Compare the deltas of greaterThanPrev vs. greaterThanNext.  Whichever delta is
graster, store it in diff. */
            if(greaterThanPrev > greaterThanNext) {
              diff = greaterThanPrev;
            } else {
              diff = greaterThanNext;
            }
/*Next, we will need to change the hunger level of the current person of the iteration
to match either the previous or next person's (determined above) hunger level in
the array.  This is done by subtracting diff from the current number.  This is
supposed to simulate 'feeding' the current person the number of sandwiches necessary
to bring his/her hunger level down to the person next to him (or before him).*/
              nums.splice(i,1,(thisPerson - diff));
              diffs.push(diff);
/*If the current person of the iteration is hungrier than the previous person, then
he will need to be fed the number of sandwiches necessary to bring his hunger level
down to match the previous person.*/
          } else if (thisPerson > prevPerson) {
              diff = thisPerson  - prevPerson;
              nums.splice(i,1,(thisPerson - diff))
              diffs.push(diff);
/*If the current person of the iteration is hungrier than the next person, then
he will need to be fed the number of sandwiches necessary to bring his hunger level
down to match the next person.*/
          } else if (thisPerson > nextPerson) {
              diff = thisPerson - nextPerson;
              nums.splice(i,1,(thisPerson - diff))
              diffs.push(diff);
/*If the current person of the iteration is less hungry or has the same hunger level
as the person before and after him then simply push 0 into the diffs array.*/
          } else {
              diffs.push(0);
          }
      }

/*Next, we'll determine the total number of sandwiches needed by adding all of the
numbers the diffs array.*/
    wichesNeeded = diffs.reduce((a,b) =>  {
        return a + b;
    },0)
/*If the total number of sandwiches needed is more than the number of sandwiches
that was have, then we'll subtract the number of sandwiches we have from the number
of sandwiches needed and the differece will be the answer to the challenge.

If we have enough sandwiches to cover the number of sandwiches needed, then we'll
return 0 as the answer to the challenge.*/
    if(wichesNeeded > wiches) {
        ans = wichesNeeded - wiches;
    } else {
        ans = 0;
    }
    return ans;
}
