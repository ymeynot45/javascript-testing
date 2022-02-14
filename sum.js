function sum(a, b) {
  return a+b;
}

function cap(word) {
  return word.replace(/^\w/, (c) => c.toUpperCase());
}

function rev(revWord) {
  return revWord.split("").reverse().join("");;
}

const Calc = function (num1, opperator, num2) {
  if(opperator === '+'){
    return (num1 + num2)
  } else if(opperator === '-'){
    return (num1 - num2)
  } else if (opperator === '*'){
    return (num1 * num2)
  } else if (opperator === '/') {
    return (num1 / num2)
  } else {
    return "not a valid opperator"
  }
}

exports.cap = cap;
exports.sum = sum;
exports.rev = rev;
exports.Calc = Calc;