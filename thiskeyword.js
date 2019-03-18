var myvar =100;
function WhoisThis(){
    var myvar =200;
    console.log(myvar); //200
    console.log(this.myvar); //100
}
WhoisThis();

var obj = WhoisThis();
console.log(obj.myvar);