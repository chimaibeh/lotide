
// Define the findKey function which takes an object and a callback.
const findKey = function(object, callback) {
    
  // Iterate over the keys in the object.
  for (const key in object) {
     
    // Check if the callback returns a truthy value for the current key's value.
    if (callback(object[key])) {
        
      // If a truthy value is found, return the current key.
      return key;
    }
  }
   
  // If no truthy value is found, return undefined.
  return undefined;
};
  
// Define the assertEqual function for comparison of the 2 objects
const assertEqual = function(actual, expected) {

  // Set pass and fail conditions and resulting outputs
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected} 🕺💃!!`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected} ⛔⛔`);
  }
};
  
// Test the findKey function with an object and a callback.
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
  
// Confirm if the result is the same as the expected value and print the result.
assertEqual(result, "noma");