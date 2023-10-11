// Define the assertArraysEqual function to compare two arrays for equality

const assertArraysEqual = function(actual, expected) {
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
        return;
      }
    }
    console.log(`✅✅✅  Assertion Passed: [${actual}] === [${expected}] 😊😊😊`);
  } else {
    console.error(`❌❌❌  Assertion Failed: [${actual}] !== [${expected}]. Try again! 😞😞😞`);
  }
};
  
//Given array of words
const words = ["ground", "control", "to", "major", "tom"];
  
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // Apply the callback function to each element in the array and push the result to the results array
    results.push(callback(item));
  }
  return results;
};
  
// Test the map function with a callback function that converts each word to its length
const wordLengths = map(words, (word) => word.length);
  
// Define the expected result based on the words array
const expectedWordLengths = [6, 7, 2, 5, 3];
  
// Use assertArraysEqual to check if the actual result matches the expected result
assertArraysEqual(wordLengths, expectedWordLengths);