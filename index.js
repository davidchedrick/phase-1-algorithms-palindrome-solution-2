function isPalindrome(word) {
  for (let i=0; i < word.length / 2; i++) {
    const j = word.length - 1 - i ;
    const startChar = word[i];
    const endChar = word[j];

    if (startChar !== endChar) return false;
  }
  return true
}

/* 
r a c e c a r
0 1 2 3 4 5 6
i           j

r a c e c a r
0 1 2 3 4 5 6
  i       j

r a c e c a r
0 1 2 3 4 5 6
    i   j

r a c e c a r
0 1 2 3 4 5 6
      ij

  Add your pseudocode here
  function, returns true is a paliindrome

  if first letter same as last letter, second is same as second to last, same until middle letter

  abba
  ^  ^
   ^^
  true

  robot
  ^   ^
  false

  itterate from beginning to  middle, 
  check corrisponding letter 
  if any letter dont match, not a pali

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
