
/*"Have the function OtherProducts(arr) take the array of numbers stored in arr
and return a new list of the products of all the other numbers in the array for
each element. For example: if arr is [1, 2, 3, 4, 5] then the new array, where
each location in the new array is the product of all other elements, is
[120, 60, 40, 30, 24]. The following calculations were performed to get this
answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. You should
generate this new array and then return the numbers as a string joined by a
hyphen: 120-60-40-30-24. The array will contain at most 10 elements and at least
1 element of only positive integers."*/

//My solution:
function OtherProducts(arr) {
//Each product will be stored in a new array called allProducts
let allProducts = [];

for(let [i,x] of arr.entries()) {
/*Each iteration will form a new array (modArr) that contains each element except
the current index that's being interated over.*/
      let modArr = (arr.slice(0,i)).concat(arr.slice(i+1));
/*Then,the product of all of the elements in modArr is calculated using .reduce()
and then pushed to the allProducts array. Again,this operation is performed on
each iteration of the for of loop.*/
      let product = modArr.reduce((tot,cur) => {
          return tot * cur;
      });
      allProducts.push(product);
      modArr = arr;
  }
/*Once all of the products have been obtained, then dashes between each product are
inserted using .join('-')*/
return allProducts.join('-');

}
