(function checkPrimeNumber(num) {
    var flag = true;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = false;
        }
    }
    if (flag) {
        console.log(`${num} is prime number!`);
    }
})(11);


//check prime number between 1 to 100.

function checkprimenumber1to100() {
    for (var i = 2; i <= 100; i++) {
        var flag = true;
        for (var j = 2; j <= i - 1; j++) {
            if (i % j === 0) {
                flag = false;
            }
        }
        if (flag) {
            console.log(`${i} `);
        }
    }
}
checkprimenumber1to100();


// prime factorization

(function PrimeFacotrs(num) {
    for (var i = 2; i <= num / i; i++) {
        //console.log('i = ' +i+ 'number'=  +num);
        while (num % i === 0) {
            num = num / i;
            console.log(factor = +i);
        }
    }
    if (num > 1) {
        console.log('Last factor= ' + num);
    }

})(36);


