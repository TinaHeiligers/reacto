function curry(origFunc) {
  var originalLength = origFunc.length;

  function resolver() {
    var memory = Array.prototype.slice.call(arguments);

    return function() {
      var args = Array.prototype.slice.call(arguments);
      var copy = memory.concat(args);

      if (copy.length >= originalLength) {
        return origFunc.apply(null, copy);
      }
      else return resolver.apply(null, copy);
    };
  };
  return resolver();
}

function e6Curry(origFunc) {
  var originalLength = origFunc.length;

  return (function resolver() {
    var memory = Array.from(arguments);

    return function() {
      var args = Array.from(arguments);
      var copy = memory.concat(args);
      if (copy.length >= originalLength) {
        return origFunc(...copy);
      }
      else return resolver(...copy)
    };
  })();
};

function doMath(a, b, c, d) {
  return a + b - c * d;
}

var curried = e6Curry(doMath)
var makeOne = curried(1)
// var makeTwo = makeOne(2);
var returned1 = makeOne(3, 4, 5);
// var returned2 = makeTwo(4, 5);

// currying functions: making a function that returns a function that executes a function recursively
// Get the length of the function passed in (this will be the count of the number of arguments the function requires) and save that as a global variable for the funciton
// In the function that returns the function doing all the work:
// create a memory object that will store all the arguments passed in thus far
// in the function doing the work, make an array of the arguments provided
// concatenate that on to the memory object make
// check the number of arguments against the original number required
// if it's enough or more than, return the original function with the arguments gathered through a spread.


