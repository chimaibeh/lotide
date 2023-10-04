
// const assertEqual = function(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log(`✅✅✅ Assertion Passed: 🎉🎉🎉`);
//     } else {
//       console.error(`❌❌❌ Assertion Failed: 🤷🤷🤷`);
//     }
//   };
    
//    // Function to count letters in a string
//   function countLetters(input) {
//     const letterCount = {}; // Create an empty object to store letter counts
  
//     // Iterate through each character in the input string
//     for (let i = 0; i < input.length; i++) {
//       const letter = input[i].toLowerCase(); // Convert the letter to lowercase
  
//       // Check if the character is a letter (a-z)
//       if (/[a-z]/.test(letter)) {
//         // If it's a letter, update its count in the letterCount object
//         if (letter in letterCount) {
//           letterCount[letter]++;
//         } else {
//           letterCount[letter] = 1;
//         }
//       }
//     }
  
//     // Convert the result into the desired format
//     const result = Object.entries(letterCount).map(([letter, count]) => {
//       return `${letter}(${count})`; // Format each letter and count as a string
//     });
  
//     return result; // Return the formatted result
//   }
  
//   // Test cases
//   const Word1 = "home";
//   const expectedOutput1 = ["e(1)", "h(1)", "m(1)", "o(1)"];
//   assertEqual(countLetters(Word1), expectedOutput1); // Test with Word1
  
//   const Word2 = "hullabaloo";
//   const expectedOutput2 = ["a(2)", "b(1)", "h(1)", "l(2)", "o(2)", "u(1)"];
//   assertEqual(countLetters(Word2), expectedOutput2); // Test with Word2
  
//   const sentence1 = "good eyes are green";
//   const expectedOutput3 = ["a(1)", "d(1)", "e(5)", "g(2)", "n(1)", "o(2)", "r(2)", "s(1)", "y(1)"];
//   (assertEqual(countLetters(sentence1), expectedOutput3)); // Test with sentence1
  


const assertEqual = function(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log(`✅✅✅ Assertion Passed: 🎉🎉🎉`);
    } else {
      console.error(`❌❌❌ Assertion Failed: 🤷🤷🤷`);
    }
  };
    
  // Function to count letters in a string
  function countLetters(input) {
    const letterCount = {}; // Create an empty object to store letter counts
  
    // Iterate through each character in the input string
    for (let i = 0; i < input.length; i++) {
      const letter = input[i].toLowerCase(); // Convert the letter to lowercase
  
      // Check if the character is a letter (a-z)
      if (/[a-z]/.test(letter)) {
        // If it's a letter, update its count in the letterCount object
        if (letter in letterCount) {
          letterCount[letter]++;
        } else {
          letterCount[letter] = 1;
        }
      }
    }
  
    // Convert the result into the desired format
    const result = Object.entries(letterCount).map(([letter, count]) => {
      return `${letter}(${count})`; // Format each letter and count as a string
    });
  
    return result; // Return the formatted result
  }
  
  // Test cases
  const Word1 = "home";
  const expectedOutput1 = ["h(1)", "o(1)", "m(1)", "e(1)"];
  assertEqual(countLetters(Word1), expectedOutput1); // Test with Word1
  
  const Word2 = "hullabaloo";
  const expectedOutput2 = ["h(1)", "u(1)", "l(2)", "a(2)", "b(1)", "o(2)"];
  assertEqual(countLetters(Word2), expectedOutput2); // Test with Word2
  
  const sentence1 = "good eyes are green";
  const expectedOutput3 = [`"{" "a(1)", "d(1)", "e(5)", "g(2)", "n(1)", "o(2)", "r(2)", "s(1)", "y(1)" "}"`];
  assertEqual(countLetters(sentence1), expectedOutput3); // Test with sentence1


//const expectedOutput3 = ["g(2)", "o(2)", "d(1)", "e(5)", "y(1)", "s(1)", "a(1)", "r(2)", "n(1)"];


  console.log(countLetters(sentence1));
  