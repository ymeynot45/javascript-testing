function sum(a, b) {
  return a+b;
}

function cap(word) {
  return word.replace(/^\w/, (c) => c.toUpperCase());
}




exports.cap = cap;
exports.sum = sum;