function init() {
  var name = 'Amrendra';
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();

///

function myFunc() {
  var name = 'kumar';
  function dispFunc() {
    console.log(name);
  }
  return dispFunc;
}

var dispTest = myFunc();
dispTest();

//

function MakeProduc(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

var prod1 = MakeProduc(10);
var prod2 = prod1(10);
var prod3 = prod2(10);
console.log(prod3);

///

var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value());
counter.increment();
counter.increment();

console.log(counter.value());

counter.decrement();
console.log(counter.value());

///

var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
};

var counter1 = makeCounter();

counter1.increment();
counter1.increment();
counter1.increment();

console.log(counter1.value());
counter1.decrement();
console.log(counter1.value());

// console.log('increment');
// function test() {
//   for (var i = 0; i < 5; i++) {
//     (function () {
//       var j = i;
//       setTimeout(() => {
//         console.log(j);
//       }, 500);
//     })();
//   }
// }
// test();

///

// function factorial(num) {
//   if (num == 0 || num === 1) return 1;
//   num * factorial(num - 1);
// }

factorial(5);

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  for (var i = 2; i < num; i++) {
    num = num * i;
  }
  console.log(num);
}
