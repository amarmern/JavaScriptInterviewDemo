var input = {
  name: "coder",
  age: 20,
  card: {
    number: "1234567890123456",
    cvv: 123,
    expiry: "20201020"
  },
  month: ["jan", { value: "feb" }, 3, ["jan", 2, 3]]
};

/* output : {
  name : 5,
  age : -1,
  card: {
    number: 16,
    cvv: -1,
    expiry: 8,
  },
  month: [3, { value : 3 }, -1, [3, -1, -1]]
} */
