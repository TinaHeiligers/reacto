//eg 203 -> 11001011
//recursevily add to the front of the string when dividing by 2
//
function decimalToBinary(num) {
  if (!num) return "";
  return decimalToBinary(Math.floor(num/2) + num%2);
}

//OR
//
function decimalToBinary(num) {
  var binaryStr = '';
  while(num) {
    var remainder = num % 2;
    binaryStr = remainder + binaryStr;
    num = Math.floor(num/2)
  }
  return binaryStr;
}

//eg 11001011 -> 203
//build up how many powers of 2 go into the number, using a 0 if there's no remainder, 1 if there is.
function binaryToDecimal(numStr) {
  if (!numStr.length) return 0;
  return binaryToDecimal(numStr.slice(0, -1))*2 + Number(numStr[numStr.length-1]);
}

//OR
function binaryToDecimal (numStr) {
  var sum = 0;
  var reversedStr = numStr.split('').reverse();
  for (var i = 0; i < reversedStr.length; i++) {
    sum += Math.pow(2, i) * reversedStr[i];
  }
  return sum;
}
