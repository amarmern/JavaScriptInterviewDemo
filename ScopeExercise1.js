var a = 10;
//console.log("a=",a);
function outer(){
    var b=a;
    console.log("b=",b);
    function inner(){
        var b= 20;        
        var c= b;
        c= 40;
        console.log("b=",b);
        console.log("c=",c);
    }
    inner();
}

outer();


var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}

console.log(a);
b();
var x = 10;
function foo(){
  console.log(x);
  if(x){
    var x = 20;
    console.log(x);
  }
  console.log(x);
}
foo();


var a = 'abc';
var b = 'def';

function fn() {
    a = 123;
    var b = 456;
    console.log(a, b) // 123, 456
}
console.log(a, b) //abc,def
fn();
console.log(a, b) //123, def