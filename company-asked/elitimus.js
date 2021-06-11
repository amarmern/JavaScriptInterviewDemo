var x = 3;

var foo = {
  x: 2,
  bar: {
    x: 1,
    baz: function () {
      return this.x;
    },
  },
};

var fbb = foo.bar.baz;

console.log(fbb());

console.log(foo.bar.baz());

var test = {
  name: 'elitimus',
  obj: {
    name: 'amrendra',
    baz: function () {
      return this.name;
    },
  },
};
console.log(test.obj.baz);

console.log(test.obj.baz());

var obj = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

console.log(obj.getX.bind(obj)());
console.log(obj.getX.call(obj));
console.log(obj.getX.apply(obj));
console.log(obj.getX);
console.log(obj.getX());

function swapNumber(a, b) {
  b = b - a;
  a = a + b;
  b = a - b;
  console.log('a=' + a + 'and' + b);
  //2nd way
  [a, b] = [b, a];
  console.log('a=' + a + 'and' + b);
}


var test1 = {
  comp: 'DMI',
  role: 'SSE',
  fun: () => {
    return `In $ ${this.comp} i am a ${this.role} `;
  },
};

console.log(test1.fun);
console.log(test1.fun());

var test2 = {
  comp: 'DMI',
  role: 'SSE',
  fun: function () {
    return `In ${this.comp} i am a ${this.role} `;
  },
};

console.log(test2.fun);
console.log(test2.fun());
