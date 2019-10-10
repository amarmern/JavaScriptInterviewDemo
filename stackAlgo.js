var word = "raccar";
var rWord = ""

var arr = [];

for(var i =0; i<word.length; i++){
    arr.push(word[i]);
}

for(var i =0;i < word.length; i++){
    rWord +=  arr.pop();
}

if(word == rWord){
    console.log('Palindrum');
}
else{
    console.log(' Not Palindrum!');
}