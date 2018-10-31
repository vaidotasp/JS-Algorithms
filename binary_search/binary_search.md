# Binary Search

### Description
It is a search algorithm that finds a target position within a **sorted** array. Search compares the middle value to the target if chops the other half if target does not match the middle value.  If the target value matches the middle element, its position in the array is returned.
https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array

### Performance
O(log n) - logarithmic time

### Pseudo Code

1. Initiate `min=0` and `max=n-1`
2. Calculate `guess` as and average of `min` and `max` rounded down to integer
3. If `array[guess] === target` you found it, so return `guess`
4. If your guess was too low, `array[guess] < target` set `min=guess+1`
5. If your guess was too high, `array[guess] > target` set `max=guess-1`
6. Repeat from step 2