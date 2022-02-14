function sum(a, b) {
  return a+b;
}

function cap(word) {
  return word.replace(/^\w/, (c) => c.toUpperCase());
}

function rev(revWord) {
  return revWord.split("").reverse().join("");;
}

const Calculator = function (num1, opperator, num2) {
  return (num1 opperator num2)


}

}


exports.cap = cap;
exports.sum = sum;
exports.rev = rev;