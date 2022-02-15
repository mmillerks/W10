//// index.js
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const re = /[^A-Za-z0-9]/g;
    const lowRegStr = str.toLowerCase().replace(re, "");
    const reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

palindrome("No lemon. No melon.");

module.exports = palindrome;