// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
const binaryArrayToNumber = arr => {
    // let arrJoin=arr.join('');
    // console.log(arrJoin);
    // let arrNum=parseInt(arrJoin,2); //takes in two arguments first one is a string and second a number that represents a particular base, like 10 for decimal base, 2 for binary. This function parses the string argument and returns an integer of the specified radix ( base).
    // console.log(arrNum);
  
    return parseInt(arr.join(''),2)
   
  };
  
  console.log(binaryArrayToNumber([0,0,1,0]));
  console.log(binaryArrayToNumber([1,0,1,1]));
  console.log(binaryArrayToNumber([1,1,1,1]));
  console.log(binaryArrayToNumber([0,1,1,0]));