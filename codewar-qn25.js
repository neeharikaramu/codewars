// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.
// Good luck!

//with for loop
function capitalize(s){
    let arrum = s.split('');
    let jrrum=s.split('');
    for(i=0;i<arrum.length;i++){
      if(i%2===0){
        arrum[i]=arrum[i].toUpperCase();
      }
      else{
        arrum[i]=arrum[i];
      }
    }
    // console.log(arrum.join(''));
    for(i=0;i<jrrum.length;i++){
      if(i%2!==0){
        jrrum[i]=jrrum[i].toUpperCase();
      }
      else{
        jrrum[i]=jrrum[i];
      }
    }
    // console.log(jrrum.join(''));
   return  [arrum.join(''),jrrum.join('')];
  }
  
  console.log(capitalize('abcdefg'));
  console.log(capitalize("codewars"));
  
  //with map
  function cap(s){
    let evenSplit=s.split('').map((x,ind)=>{
      return (ind%2===0) ? x=x.toUpperCase() : x;
    }).join(''); //you have to use return if its a big fn i think otherwise you will get an array of undefineds
    let oddSplit=s.split('').map((x,ind)=>{
      return (ind%2!==0) ? x=x.toUpperCase() : x;
    }).join('');
    
    return ([evenSplit,oddSplit]);
  
  // let evenArray=evenSplit.map((x,ind)=>{
    //   if(ind%2===0){
    //     return x=x.toUpperCase();
    //   }
    //   else{
    //     return x=x;
    //   }
    // });
  }
  
  console.log(cap('abcde'));