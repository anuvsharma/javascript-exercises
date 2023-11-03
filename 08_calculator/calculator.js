const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((totalValue, currentValue) => accumulator * currentValue);
};

const power = function(a, b) {
  return (a ** b)
};

const factorial = function(num) {
  if (num == 0 || num == 1){
    return 1;
  }
  else{
    let result = num;
    for (i = num-1; i>= 1; i--){
      result *= i;
    }
    return result;
  }
	
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
