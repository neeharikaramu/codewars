// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle.

// P:array of elements containing one 'needle'
// Rreturn string message that says: "found the needle at position (index of needle) " 
// E: findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) would return "found the needle at position 5"
// P: 

function findNeedle(haystack) {
    for(i=0;i<haystack.length;i++){
        if(haystack[i]==='needle'){
            return `needle found at ${i}`
        }
    }
  }

  console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));
  console.log(findNeedle( ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));
  console.log(findNeedle( [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]));