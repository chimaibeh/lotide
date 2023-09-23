
//Define the eqArray function

const eqArrays = function(array1, array2) {

    if (array1.length !== array2.length) {
      return false;
    }
    
    // Iterate through each array to do a comparison side by side
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] !== array2[x]) {
        return false;
      }
    }
    
    // Print true if all elements are a match
    return true;
  };
    
  // Define the without function

  function without(array1, array2) {
    const result = array1.filter(item => !array2.includes(item));
    return result;
  }
  
  // Examples
  const result1 = without([1, 2, 3], [1]); // [2, 3]
  const result2 = without(["1", "2", "3"], [1, 2, "3"]); // ["1", "2"]
  const words = without(["hello", "world", "lighthouse"], ["lighthouse"]); //["hello", "world"]


  //Actual output
  console.log(result1)
  console.log(result2)
  console.log(words)

  //Output confirmed with eqArrays
  console.log(eqArrays(result1, [2, 3])); // true
  console.log(eqArrays(result2, ["1", "2"])); // true
  console.log(eqArrays(words, ["world"])); // false  