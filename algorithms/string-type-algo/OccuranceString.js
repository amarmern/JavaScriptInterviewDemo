const countRepeatChar = (str) => {
  let obj = {};
  if (str) {
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]]) {
        obj[str[i]] += obj[str[i]];
      } else {
        obj[str[i]] = 1;
      }
    }
    console.log(obj);
  }
};
countRepeatChar('aabcddeee');





