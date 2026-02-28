function isEvenNumber(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const isEvenNumber = (num) => num % 2 === 0;

let result1 = isEvenNumber(45);
console.log(result1);
