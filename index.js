function isPalindrome(word) {
  // Reverse the word and check if it matches the original
  return word === word.split("").reverse().join("");
}

/* 
  📌 Pseudocode:
  1. Convert the word into an array using `split("")`.
  2. Reverse the array using `reverse()`.
  3. Convert it back to a string using `join("")`.
  4. Compare the reversed string with the original string.
  5. If they are equal, return `true` (palindrome); otherwise, return `false`.
*/

/* 
  🕒 Big O Complexity:
  - Time Complexity: O(n) -> We iterate through the string once to reverse it.
  - Space Complexity: O(n) -> We create a new reversed string.
*/

/*
  📝 Explanation:
  - A palindrome reads the same forward and backward.
  - By reversing the string and comparing it to the original, we can determine if it's a palindrome.
*/

// ✅ Custom Test Cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar")); // true

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot")); // false

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam")); // true

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello")); // false

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a")); // true (single character is always a palindrome)
}

// Export for testing
module.exports = isPalindrome;
