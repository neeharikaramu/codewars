// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
  return str=x.replace(/\s+/g, ''); 
}

console.log(noSpace('Hello World'));