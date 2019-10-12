//using iteration
(function fibbnociSeries(num) {
    let fib = [0, 1];
    if (fib < 2) return 1;
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    console.log("fib= ", fib)
})(5);

//using recursive...



