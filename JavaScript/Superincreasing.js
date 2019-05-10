
/*"Have the function Superincreasing(arr) take the array of numbers stored in arr
and determine if the array forms a superincreasing sequence where each element in
the array is greater than the sum of all previous elements. The array will only
consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] then your
program should return the string "true" because it forms a superincreasing sequence.
If a superincreasing sequence isn't formed, then your program should return the
string "false" "*/

//My solution:
function Superincreasing(arr) {

let counter = [];
let ans = true;

/*On each iteration, push i into the counter array and store the current sum of
counter in acrued.*/
for(let i = 0; i < arr.length; i++){
    counter.push(arr[i]);
    let acrued  = counter.reduce((tot,cur) => {
        return tot + cur;
        },0);
/*Check and see if acrued (current sum of counter) is greater than the next number
in arr.  If so, then that means that arr does not form a superincreasing sequence.
The loop will then break and false will be returned. However, if each iteration results
in the next element in arr being greater than acrued, then that means that arr forms
a superincreasing sequence and true will be returned.*/        
    if(acrued >= arr[i + 1]) {
        ans = false;
        break;
    }
}

return ans;

}
