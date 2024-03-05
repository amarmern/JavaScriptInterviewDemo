Explain
1.    <p id="parent">
        <div id="1">
            <p id="2"></p>
            <p id="3"></p>
            <p id="4">
                <p id="5"></p>
            </p>
        </div>
    <p>
    

    Pick elements ids selected using below selectors
    
    1.div p = <p id="2"></p>
    2.div - p = 
    3.div + p = <p id="2"></p>
            <p id="3"></p>
            <p id="4">
    4.div > p =  <p id="2"></p>
            <p id="3"></p>
            <p id="4">
                <p id="5"></p>
            </p>
=============================================================

2.write a selector to Pick all <a> elements having href attribute contains "landmark" a > has.contains('landmark")

=============================================================

3.What will the code below output to the console and why?

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); //bar
        console.log("outer func:  self.foo = " + self.foo); //bar
        (function() {
            console.log("inner func:  this.foo = " + this.foo); //bar
            console.log("inner func:  self.foo = " + self.foo); // undefined (since the scope of this is noit available in sode the clouser)
        }());
    }
};
myObject.func(); 

=============================================================

4.In what order will the numbers 1-4 be logged to the console when the code below is executed? 

(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

// 1 4 3 , 2

=============================================================
5.Consider the two functions below. Will they both return the same thing? 

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}


console.log("foo1 returns:"); // 
console.log(foo1()); 
console.log("foo2 returns:");
console.log(foo2()); 

=============================================================
6.What would the following lines of code output to the console?

console.log("0 || 1 = "+(0 || 1)); true
console.log("1 || 2 = "+(1 || 2));  2
console.log("0 && 1 = "+(0 && 1)); true
console.log("1 && 2 = "+(1 && 2));  2
console.log(false == '0') true
console.log(false === '0') false
console.log('a'+'b')  // ab
console.log('a'-'b')  // NaN
console.log('a'+'b'+2) ab2
console.log('a'-'b'+1) // NaN

=============================================================
7.
myVar;   ?? value of myVar?  // undefined
myConst; // value of myConst? // we candefine and initilize the const variable

var myVar = 'value' // 
const myConst = 3.14;
=============================================================
8.

console.log(0.1 + 0.2); // 0.3
console.log(0.1 + 0.2 == 0.3); true
console.log(0.2 + 0.2 == 0.4); true
console.log(0.2 + 0.2); // 0.4

=============================================================
9.
console.log(1 + '2' + '2'); // 122
console.log(1 + +'2' + '2'); //32
console.log(1 + -'1' + '2'); //02
console.log(+'1' + '1' + '2'); // 112
console.log('A' - 'B' + '2'); // NAN2
console.log('A' - 'B' + 2); //NaN

=============================================================
10.
for (var i = 0; i < 5; i++) {
    (function(x) {
        setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}
//6.6.6.6
