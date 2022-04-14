// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
//P:string 
//R:returns the gievn string b ut with no bang (if bang exists in the string)
//E: 'HELLO WORLD!' will be chnaged to 'HELLO WORLD'
//P:
function removeExclamationMarks(s) {
    //    let p=s.split('!');
    //    let j=p.join('');
    //    console.log(j);
    return s.split('!').join('');   //another solution:-   return s.replace(/!/gi, '');
}

console.log(removeExclamationMarks('hello world! i think! youre very pretty! do you know how to speak! i think you do? '));
console.log(removeExclamationMarks('hello!')); 