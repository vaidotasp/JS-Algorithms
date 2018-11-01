/*
Input: unsorted array
Output: sorted array
*/

//swap function
function swap(array, firstIndex, secondIndex){
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
  return array;
}

//find index of minimum value in the array
//input: array and start index 
//output: min index
function findMin(array, startIndex){
  let minValue = array[startIndex];
  let minIndex = startIndex;
  for(let i=startIndex; i<array.length; i++){
    if (array[i] < minValue){
      minValue = array[i];
      minIndex = i;
    }
  }
  return minIndex;
}

const unsorted = [30, 1, 18, 88, 95, 83, 96, 90, 31, 7, 25, 35, 47, 53, 36, 61, 49, 26, 84, 57, 85, 28, 86, 15, 92, 93, 11, 51, 69, 72, 100, 98, 27, 78, 24, 9, 38, 59, 22, 101, 74, 68, 91, 48, 80, 17, 16, 21, 77, 97, 79, 2, 5, 75, 23, 89, 54, 82, 14, 56, 40, 63, 87, 32, 4, 60, 45, 99, 71, 10, 73, 46, 62, 64, 70, 8, 94, 6, 13, 33, 67, 41, 39, 44, 12, 65, 29, 42, 55, 76, 66, 50, 37, 43, 20, 19, 3, 81, 58, 34]

function selectionSort(array){
  for(let i=0; i<array.length; i++){
    let min = findMin(array,i);
    swap(array, i, min);
  }
  return array;
}

console.log(selectionSort(unsorted))
