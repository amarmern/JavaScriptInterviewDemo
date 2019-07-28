var x =3;

var foo = {
    x: 2,
    bar: {
        x: 1,
        baz: function(){
            return this.x;
        }
    }
};

var fbb = foo.bar.baz;

console.log( fbb() );

console.log(foo.bar.baz() );


var test = {
    name : 'elitimus',
    obj : {
        name : 'amrendra',
        baz: function(){
            return this.name;
        }
    }
}
console.log(test.obj.baz);

console.log(test.obj.baz());


var obj = {
  x: 81,
  getX: function() {
    return this.x;
  }
};

alert(obj.getX.bind(obj)());
alert(obj.getX.call(obj));
alert(obj.getX.apply(obj));

function swapNumber(a,b){
  b= b - a;
  a = a + b;
  b= a - b;
  console.log('a='+a +'and' + b );
  //2nd way
  [a,b] = [b,a];
  console.log('a='+a +'and' + b );
}

