new Promise((res) => res(2))
  .then((v) => {
    console.log('first call', v);
    return v * 2;
  })
  .then((v) => {
    console.log('second call', v);
    return v * 2;
  })
  .finally((v) => {
    console.log('third call', v);
    return v * 2;
  })
  .then((v) => {
    console.log('fourt call', v);
  });
