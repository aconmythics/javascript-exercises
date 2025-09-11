const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  arrSum = 0
	array.forEach(element => {
    arrSum += element
  });
  return arrSum
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current)
};

const power = function(a, b) {
	return a**b
};

const factorial = function(a) {
  if (a == 0 || a == 1) {
    return 1
  }
  let ans = 1
  for (i = a; i>0;i--) {
    ans *= i
  };
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
