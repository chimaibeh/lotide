//Task: Implement takeUntil function which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  //Initialize an empty array named result to store the collected items.
  const result = [];
  // Iterate through the given array.
  for (const item of array) {
    // Add the current item to the result array.
    result.push(item);
    // Check if the callback returns truthy for current item
    if (callback(item)) {
    // If the callback returns truthy, break out of the loop.
      break;
    }
  }
  // Return result array containing the collected items.
  return result;
};
    
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
    
//Expected outputs [ 1, 2, 5, 7, 2 ]