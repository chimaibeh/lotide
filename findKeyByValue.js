// Define the assertEqual function
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅ Assertion Passed: ${actual} === ${expected} 🕺💃`);
    } else {
      console.log(`❌❌ Assertion Failed: ${actual} !== ${expected} ⛔⛔`);
    }
  };
  
  // Define the findKeyByValue function
  const findKeyByValue = function(object, value) {
    for (const key in object) {
      if (object.hasOwnProperty(key) && object[key] === value) {
        return key;
      }
    }
    return undefined; // Return undefined if no key with the given value is found
  };
  
  // Example :
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  