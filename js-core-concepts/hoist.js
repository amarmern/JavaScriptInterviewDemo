// Initialize x in the global scope
let x = true;

function hoist() {
  // Initialize x in the function scope
  if (3 === 4) {
    let x = false;
  }
  console.log(x);
}

hoist();


(function () {

  console.log(typeof foo); // function pointer
  console.log(typeof bar); // undefined

  var foo = 'hello',
    bar = function () {
      return 'world';
    };

  function foo() {
    return 'hello';
  }

}());