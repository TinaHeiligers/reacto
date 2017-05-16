function stringPermutations(str) {
  var results = [];
  var letters = str.split('');
  results.push([letters.shift()]);//make a copy of the letters and use them in results as seperate letters
  while (letters.length) {//while there are letters left
    var currLetter = letters.shift()//get the next current letter
    var tempResults = [];//initialize an array
    results.forEach(function(curResult) {//go through each letter in the results array
      for (var i = 0; i <= curResult.length; i++) {
        var temp = curResult.slice();
        temp.splice(i, 0, currLetter);
        tempResults.push(temp)
      }
    });
    results = tempResults; //overwrite previous results
  }
  results = results.map(function(letterArr) {
    return letterArr.join('');
  });
  return results.filter(function(el, index) {
    return results.indexOf(el) === index;
  }).sort();
}
