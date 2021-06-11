
// function Sum(arg0) {
//     function Inner1(arg1) {
//       function Inner2(arg2) {
//         return arg0 + arg1 + arg2;
//       }
//       return Inner2;
//     }
//     return Inner1;
//   }
//   console.log(Sum(3)(4)(5));


  var sum=0; // global variable
function Sum(num){
  sum=num+sum;
  return Sum;
}
Sum(3)(4)(5);