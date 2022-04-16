// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

// P:an odd-length array of integers (why is the array being odd-lenght imp?) where all the numbers are the same except for one number
// R:that single different number
// E:[1, 1, 2] ==> 2 : [17, 17, 3, 17, 17, 17, 17] ==> 3
// P: 


function stray(numbers) {
    let newStray;
   for(i=0;i<numbers.length;i++){
      if(numbers[i]===numbers[i+1]){
        newStray=numbers[i];
      }
   }
  //  let happy=numbers.filter(x=>x!==newStray);
  //  console.log(parseInt(happy.join('')));
  
  return parseInt(numbers.filter(x=>x!==newStray).join(''));
  // const stray = nums => nums.reduce((a, b) => a ^ b); AHHHH I TOLD YOU THE ODD LENGTH IS IMP
  // ^ is bitwise XOR and because the array is odd-length, all equal pairs cancel each other. The only number remaining is the stray number. OHH DAMN IT COLLEGE IS STILL HAUNTING ME FFS
  
  
  // function stray(numbers) {
  //   var a = numbers.sort();
    
  //   if(a[0] != a[1]) {
  //     return a[0]
  //   } 
  //   return a[a.length-1]
  // }  this is so nice as theyre sorting it so that the stray number will be at the beg or end or array as stray is only one element in a whole pool of same elements. therefore theyre checking if the element is at the beg or at the end only
  
  }
  console.log(stray([1,1,2]));
  console.log(stray([17, 17, 3, 17, 17, 17, 17]));
  console.log(stray([17,21,21]));