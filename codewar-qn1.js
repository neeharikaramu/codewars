// Complete the solution so that it reverses the string passed into it.

function solution(str){
    let rev='';
    let num=str.length-1;
    for(let i=num;i>=0;i--){
      rev+=str[i];
    }
    return rev;
  }

  // with methods:- return str.split('').reverse().join('');