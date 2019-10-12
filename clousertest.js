
for (var j = 0; j <= 5; j++) {
    setTimeout(function timer() {
        console.log(j)
    }, 2000)
}

for (var j = 0; j <= 5; j++) {
    (function () {
        var i = j;
        setTimeout(function timer() {
            console.log(i)
        }, 2000)
    })();
}



