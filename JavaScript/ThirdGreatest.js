
/*"Have the function ThirdGreatest(strArr) take the array of strings stored in
strArr and return the third largest word within it. So for example: if strArr is
["hello", "world", "before", "all"] your output should be world because "before"
is 6 letters long, and "hello" and "world" are both 5, but the output should be
world because it appeared as the last 5 letter word in the array. If strArr was
["hello", "world", "after", "all"] the output should be after because the first
three words are all 5 letters long, so return the last one. The array will have
at least three strings and each string will only contain letters."*/

//My solution:
function ThirdGreatest(strArr) {
  /*Sort the strArr in decending order and return the third word in the array.*/
     strArr.sort((a,b) => {
         return b.length - a.length;
     })
     return strArr[2];
 }

/*Another solution is to use a ternary operator.  While this solution produced correct
results in the Chrome console each time, it would fail occasionaly when ran in Coderbyte.*/

// function ThirdGreatest(strArr) {

//   strArr.sort((a,b) => {
//       return a.length > b.length ? -1 : 1;
//   })

//   return strArr[2];

// }
