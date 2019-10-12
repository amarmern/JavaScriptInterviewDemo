a = 1;
b = 2;

console.log('a=' + a + 'and b= ' + b);

a = a + b; //(1 + 2 =3)
b = a - b; //(3-2 = 1)
a = a - b; //(3-1 =2)
console.log('a=' + a + 'and b= ' + b);

function swapNumber(a, b) {
    console.log('a=' + a + 'and b= ' + b);
    b = b - a; //(2 - 1 = 1)
    a = a + b; //( 1 + 1 = 2)
    b = a - b; // (2 - 1 = 1)
    console.log('a=' + a + 'and b= ' + b);
    //2nd way
    [a, b] = [b, a];
    console.log('a=' + a + 'and b= ' + b);
}

console.log(swapNumber(1, 2));