var hero = "slaman khan";

if (true) {
  var hero = "sahruk khan";
  console.log(hero);
}
console.log(hero);

var a = 1;
function b() {
  a = 10;
  return;
  function c() {}
}
b();
console.log(a); //10

var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a); //1

var a = 1;
function b() {
  a = 10;
  //return;
  function a() {}
}
b();
console.log(a); //1
