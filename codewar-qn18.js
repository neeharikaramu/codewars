// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

// P: 3 integer values
// R: true or false ie BOOLEAN. true is returned if a triangle can be made with the given paremeters (taking the parameters as lengths of triangle) else false is returned.
// E: Input:(1,2,2), Output: true; Input:(7,2,2), Output: false
// P:  1) put integers in an array ~
//     2) sort the array ~
//     3) check if sum of the first 2 elements (ie., the smallest and the second smallest) is greater than the thrid interger. If true, return true. If false, return false. Based on Triangle Inequality Theorem

function isTriangle(a,b,c)
{
  const triangleArray=[a,b,c];
  const sortTriangleArray=triangleArray.sort((a,b)=>a-b);
  return (Number(sortTriangleArray[0]+sortTriangleArray[1])>sortTriangleArray[2]);

  //  return (Number(sortTriangleArray[0]+sortTriangleArray[1])>sortTriangleArray[2]) ? true : false;
  //return is boolean so for true false qns can just do return (Number(sortTriangleArray[0]+sortTriangleArray[1])>sortTriangleArray[2]). it will return true if true and false if false

  //(alternate solution by someone else) return a + b > c && a + c > b && c + b > a; this is so beautiful
}
console.log(isTriangle(7,2,2));
console.log(isTriangle(1,2,2));
console.log(isTriangle(1,2));
