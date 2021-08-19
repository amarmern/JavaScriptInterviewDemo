//  preeload
//  prefetch


//  function App(){
// 	const [state, setState] = useState({name: '', email:""})
  
//   setState(..state, [e.atrget.value)
  
//   useEffect(()=>{} 
//   retun () =>{}
//   ,[props])
// }


(function(){
  setTimeout(()=> console.log(1),2000);
  console.log(2);
  setTimeout(()=> console.log(3),0);
  console.log(4);
})();


// let a = [3]
// console.log(a)
// let b= undefined
// a = b
// a = [4]
// console.log(b)




function someFunc(){
  console.log("1" + 1); // 11
  console.log("A" - 1); // NaN
  console.log(2 + "-2" + "2"); //02
  console.log("Hello" - "World" + 78); //NaN
  console.log("Hello"+ "78");// Hello78
}
someFunc();


function sum(a){
return function(b){
return a + b
a = 50;
}
}

let add =sum(10)(20)
console.log("",add)

(function(a){
  return (function(){
    console.log(a);
    a = 23;
  })()
})(45);
console.log("is corect",a)

//store => state{}


// P ==>c1 ==>g1,g2
// 		 c2 ==> g3,g4
     
//      1) using props
//      2)using udeConext
//      3)using redux
     
     
     
     
