// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b. Note: a and b are not ordered!
// P: two numbers. can be +ve or -ve
// R: sum of all numbers between the provided parameters including them params. if single number is provided then return that
// E: (-1, 0) --> -1 (-1 + 0 = -1) ; (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2); (1, 2) --> 3 (1 + 2 = 3) ; (0, 1) --> 1 (0 + 1 = 1) ;   (1, 1) --> 1 (1 since both are same)
// P:



function getSum(a,b)
{
let sum=0;
let sumArray=[a,b];
if(sumArray.includes(undefined) || sumArray.includes(null) || sumArray.includes('')){
  return a;
}
else{
  sortArray=sumArray.sort((a,b)=>a-b);
for(i=sortArray[0];i<=sortArray[1];i++){
  sum=Number(sum+i);
}
  return sum;
}
}

// console.log(getSum(2,4));
console.log(getSum(0,-1));
console.log(getSum(-5));
console.log(getSum(172,-428));
console.log(getSum(2,-5));
console.log(getSum(2,''));