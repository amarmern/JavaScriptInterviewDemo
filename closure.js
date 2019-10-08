// function MakeAddr(x) {
//     return function (y) {
//         return x + y
//     };
// }

// var add5 = MakeAddr(5)(2);

// console.log(add5);

//private methods clouser

var myCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function () {
            changeBy(1)
        },
        decrement: function () {
            changeBy(-1)
        },
        value: function () {
            return privateCounter;
        }
    }
};


var counter1 = myCounter();
console.log(counter1.value());
counter1.increment();
counter1.increment();
console.log(counter1.value())


var e = 10;
function sum(a) {
    return function sum(b) {
        return function sum(c) {
            return function sum(d) {
                return a + b + c + d + e
            }
        }
    }
}

console.log(sum(2)(3)(4)(5))

for (var i = 0; i < 5; i++) {
    ((j = i) => {
        setTimeout(() => {
            console.log(j);
        }, 2000)
    }
    )()
}


for (var i = 0; i < 5; i++) {
    (function () {
        var j = i;
        setTimeout(() => {
            console.log(j);
        }, 3000);
    })();
}