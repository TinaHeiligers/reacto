
// Question
// Implement a 'spyOn' function which does the following:
// Takes a function, 'func', as its parameter
// Returns a spy function, 'spy', that takes any number of arguments
// 'spy' calls 'func' with the given arguments and returns what 'func' returns
// 'spy' has the following methods:
// .getCallCount() : returns the number of times 'spy' has been called
// .wasCalledWith(val) : returns boolean of 'spy' ever being called with 'val'
// .returned(val) : returns boolean of 'spy' ever returning 'val'

function spyOn (func) {
  let [callCount, calledWith, returnVals] = [0, [], []];
  function spy (...args) {
    let returnVal = func(...args);
    returnVals.push(returnVal);
    calledWith = calledWith.concat(args);
    callCount++;
    return returnVal;
  }

  spy.getCallCount = function () {
    return callCount;
  };

  spy.wasCalledWith = function (val) {
    return calledWith.includes(val);
  };

  spy.returned = function (val) {
    return returnVals.includes(val);
  };

  return spy;
}
