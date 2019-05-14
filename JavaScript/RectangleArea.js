
/*"Have the function RectangleArea(strArr) take the array of strings stored in strArr,
which will only contain 4 elements and be in the form (x y) where x and y are both
integers, and return the area of the rectangle formed by the 4 points on a Cartesian
grid. The 4 elements will be in arbitrary order. For example: if strArr is
["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 because the
width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal
to the width * height."*/

//My solution:
function RectangleArea(strArr) {
  /*Establish a regex that looks for digits.*/
  const patt = /\d/g;
  /*Mapping over each element of strArr using the regex match() method will transform
  each element into an array.  For example, "(3,0)" would become ["3","0"]. */
  const sides = strArr.map(side => side.match(patt));
  /*Next, we'll need to get the x coordinates for each array in sides.  This can be
  done by grabbing the [0] index of each array and then transforming it into a
  number by using the +n unary operator.*/
  const widths = sides.map(side => +side[0]);
  /*Next, we'll need to get the y coordinates for each array in sides.  This can be
  done by grabbing the [1] index of each array and transforming it into a number
  by again using the +n unary operator.*/
  const heights = sides.map(side => +side[1]);
  /*Subtracting the lowest number x coordinate from the highest will give us the
  width of the rectangle.*/
  const width = (Math.max(...widths)) - (Math.min(...widths));
  /*Subtracting the lowest number y coordinate from the highest will give us the
  height of the rectangle.*/
  const height = (Math.max(...heights)) - (Math.min(...heights));
  /*Finally, multiplying the width by the height will give us the area of the
  rectangle.*/
  const area = width * height;

  return area;
}
