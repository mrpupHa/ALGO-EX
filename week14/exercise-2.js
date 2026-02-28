function reverseString(text) {
  let result = [];
  for (let i = text.length; i >= 0; i--) {
    result.push(text[i]);
  }
  return result.join("");
}

let result1 = reverseString("hello");
console.log(result1);
