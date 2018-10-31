/*
Input: sorted array
Output: target position (if exists), false (if does not exist)

*/
const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binary(array, target){
  //set min of array
  let min = 0;
  //set max of array
  let max = array.length - 1;
  
  //begin the recursive loop with the check that max is larger or equal than min. If it is equal, array is consisting of 1 element which will be the guess check
  while(max >= min) {
    let guess = Math.floor((max + min)/2);
   // console.log(guess)
    if (array[guess] === target) {
      return guess
    } else if (array[guess] < target) {
      min = guess + 1
    } else if (array[guess] > target) {
      max = guess - 1
    }
  }
  return false
}

console.log(binary(numbers, 37))