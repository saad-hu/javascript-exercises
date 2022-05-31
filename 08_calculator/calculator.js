const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let allSum = arr.reduce((total, currVal) => {
    return total+currVal;
  }, 0) 

  return allSum;
};

const multiply = function(arr) {
  let allMul = arr.reduce((total, currVal) => {
    return total*currVal;
  })

  return allMul;
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
  let fac = 1;
	for (let i = 1; i <= num; i++) {
    fac = fac * i;
  }

  return fac;
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
