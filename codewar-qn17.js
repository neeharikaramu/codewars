// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after it removes the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

// P:array of integers (ratings)
// R:return the array after removing smallest value ie lowest rating. if two ratings are the same and the lowest (2 same smallest numbers are present), remove the first occuring one ie., Input: [2,2,1,2,1], Output = [2,2,2,1]
    //IMP:-if empty array is given, return empty array. if a single rating is present in input array, what will the output be? it will obviously be removed as that element is the smallest in that array.
// E: * Input: [1,2,3,4,5], Output= [2,3,4,5]; * Input: [5,3,2,1,4], Output = [5,3,2,4]
// P: 1) find smallest number in the array ~
//    2) find index of that number ~
//    3) filter the index out? lets try ~ (it works!)

function removeSmallest(numbers) {
    const smallIndex=numbers.indexOf(Math.min(...numbers));
    return filtered=numbers.filter((x,ind)=>ind!==smallIndex);
  
    //with slice
    // let indexOfMin = numbers.indexOf(Math.min(...numbers));
    // return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  
  }
  
  console.log(removeSmallest([1,2,3,4,5]));
  console.log(removeSmallest([2,2,1,2,1]));
  console.log(removeSmallest([5,3,2,1,4]));
  console.log(removeSmallest([]));
  console.log(removeSmallest([120]));
  console.log(removeSmallest([120,362,58,65,20,26,255,265,305,323]));