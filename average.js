// Define the average function
const averageNum = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
};
  
// Call the average function
let result = averageNum([9, 3, 1, 12]);
  
// Display the results on the console.
console.log(result);
  
// Consider command-line argument
let input = process.argv[2];
  
if (input) {
  console.log(reverse(input));
}
  
// Define the reverse function
const reverse = function(original) {
  return original.split('').reverse().join('');
};