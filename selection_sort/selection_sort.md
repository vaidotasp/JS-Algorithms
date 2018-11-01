# Selection Sort

### Description
It is a sorting algorithm that goes through an array finding the smallest element in the array and moving that element to the first position. Algorithm keeps track of a subarray that is sorted and a subarray that is not sorted. As we go through the unsorted array, we are finding the the min element and pushing it to the subarray. 
https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/selection-sort-pseudocode

### Performance
O(n^2) Not efficient in large lists

### Pseudo Code

1. Traverse the original array from left to right starting at index = 0
2. Find the minimum value in the array
3. Swap the minimum value with the current index at which we are in the array
4. Continue traversal picking up at the index until we hit the end of the array