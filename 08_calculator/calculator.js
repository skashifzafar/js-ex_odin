const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
  var sum=0
  if (arr.length>0){
  for (var x=0;x<arr.length;x++){
    sum+=arr[x]
  }
  }
  return sum
};

const multiply = function(arr) {
  var mul=1
  if (arr.length>0){
  for (var x=0;x<arr.length;x++){
    mul*=arr[x]
  }
  return mul
  }
  else {
    return 0
  }
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  var fct=1
  if (a>0){
    fct=a*factorial(a-1)
  }
  return fct
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
