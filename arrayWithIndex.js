let a = [1, 2, 3, 1, 4, 1, 2];
let b = [];
for (let i = 0; i < a.length; i++) {
  let counter = 0;
  if (b.indexOf(a[i]) === -1) {
    counter = counter + 1;
    b.push(a[i]);
  }
  else{
    counter = counter
  }
}

console.log(b);