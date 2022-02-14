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

function cipher(str) {
  var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', " ", "-", "_", ".", "&", "?", "!", "@", "#", "/"];
  var alphabets1 = ['B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
  
  var resultStr = [];
  for(let i=0; i < str.length; i++){
      for(let j =0; j<alphabets.length; j++){
          if(str[i] === alphabets[j]){
          resultStr.push(alphabets1[j]);
          }
      }
  }
  return resultStr.join("");
};

const verify(numbers, calculation) => {
  if(calculation = 'average'){

  }else if (calculation = 'min'){

  }else if (calculation = 'max'){

  }else if (calculation = 'length'){

  }
}


exports.cap = cap;
exports.sum = sum;
exports.rev = rev;
exports.Calc = Calc;
exports.cipher = cipher;
exports.verify = verify;