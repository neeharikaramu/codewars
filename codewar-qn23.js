// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:

// input : 2 strings with substrings separated by ,
// output: number as a string



// P: array of strings
// R: find the difference of all possible combination of lengths of the strings in both arrays    (length(i)-lenght(j))given and return the maximum difference
// E:see above
// P: 1) find length of all strings in a1 and a2 
//    2) since they want MAXIMUM difference between any possible combination of strings from a1 and a2 we can choose the largest length number and smallest length number (one from each array) and subtract
//    3)so i think we should find max from a1 and min from a1 AND then find max from b1 and min from b1
//    4)find (maxA1 - minB1) and (maxB1 - minA1) and return the highest value out of these two



function mxdiflg(a1, a2) {
    if((!a1 || !a2) || (a1.length===0 || a2.length===0)){
      return -1;
    }
    
    let lengthA1 = a1.map(x=>x=x.length);
    let lenghtA2 = a2.map(x=>x=x.length);
    let maxA1=Math.max(...lengthA1);
    let minA1=Math.min(...lengthA1);
    let maxA2=Math.max(...lenghtA2);
    let minA2=Math.min(...lenghtA2);
    let diffA1A2=Math.abs(maxA1-minA2);
    let diffA2A1=Math.abs(maxA2-minA1);
    // return (diffA1A2>diffA2A1) ? diffA1A2 : diffA2A1 ;
    return Math.max(diffA1A2,diffA2A1);
    // return Math.max(Math.abs(Math.max(...lengthA1)-Math.min(...lenghtA2)),Math.abs(Math.max(...lenghtA2)-Math.min(...lengthA1)));
  
  }
  
  console.log(mxdiflg( ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]));
  
  console.log(mxdiflg([],["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]));