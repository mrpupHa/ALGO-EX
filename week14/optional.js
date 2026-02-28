function isPalindrome(word) {
  let wordArray = word.split("");
  let reverseWord = [];
  for (let i = wordArray.length - 1; i >= 0; i--) {
    reverseWord.push(wordArray[i]);
  }
  if (reverseWord.join("") === wordArray.join("")) {
    return true;
  } else {
    return false;
  }
}

let result1 = isPalindrome("madam");
console.log(result1); // true

let result2 = isPalindrome("hello");
console.log(result2); // false
