// Task
// Given a string str, reverse it omitting all non-alphabetic characters.
// Example
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.
// [output] a string

function reverseLetter(str) {
    // let hapy= str.split('').reverse().join('');
    const re=/[\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?" "]/g;
    return str.split('').reverse().join('').replace(re,'');
    //str.match(/[a-z]/g).reverse().join(''); matching letters and then reversing
    //s.replace(/[^a-z]/gi,'').split('').reverse().join(''); replace not alphabets with '' ahhhh
  }
  
  console.log(reverseLetter('krishan'));
  console.log(reverseLetter('ultr53o?n'));
  console.log(reverseLetter("krish21an"));