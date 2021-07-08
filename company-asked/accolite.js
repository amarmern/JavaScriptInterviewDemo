//sum(2, 3) // output 5
//sum(2)(3) // output 5

function sum(a) {
  if (arguments.length > 1) {
    return arguments[0] + arguments[1];
  } else {
    return function (b) {
      return a + b;
    };
  }
}

console.log("sum1", sum(2)(3));
console.log("sum2", sum(2, 3));

function sum1(a, b) {
  if (b) {
    return a + b;
  }
  return (b) => {
    return a + b;
  };
}

console.log("sumation1", sum1(2)(3));

console.log("sumation2", sum1(2, 3));
