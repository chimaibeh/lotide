

// Create a function head which returns tail of the array.
const tail = function(arr) {
  if (arr && arr.length > 1) {
    return arr.slice(1); // Return all items except the first item
  } else {
    return undefined; // Return undefined for empty array
  }
};
  
//const trim = arr.slice(1, array.length);

// Define function assertEqual
const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected} 😊😊😊`);
  } else {
    console.error(`❌❌❌  Assertion Failed: ${actual} !== ${expected} 😞😞😞`);
  }
};
      
assertEqual(tail([5,6,7]), [6,7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Labs"]);
assertEqual(tail(["John Doe"]), ["John Doe"]);
assertEqual(tail(["cake", "muffins", "cookies", "candy", "carrots"]),["muffins", "cookies", "candy", "carrots"]);

//additional use case
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words.slice(0)), ["Lighthouse", "Labs"]);