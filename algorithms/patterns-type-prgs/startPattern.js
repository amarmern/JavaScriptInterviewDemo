for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log('*');
  }
  console.log('\n');
}

for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i + 1; j--) {
    console.log('*');
  }
}
