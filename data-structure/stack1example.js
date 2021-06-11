var letters = [];
var word = "racecar";
var rwords = "";

for(var i =0; i< word.length; i++){
    letters.push(word[i]);
}

for(var i=0; i< word.length; i++){
    rwords+= letters.pop();
}

if(word = rwords){
    console.log( word + "is palindrum")
}

else{
    console.log( word + "is not palindrum")
}