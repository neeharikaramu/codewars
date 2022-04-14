// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// P: array of strings
// R: each line prepended by the correct number.
// E: number(["a", "b", "c"])  => ["1: a", "2: b", "3: c"]
// P:

var number=function(array){
    return array.map((x,ind)=>`${ind+1}: ${x}`);
  };
  
  console.log(number(["a", "b", "c",'d']));
  console.log(number([]));