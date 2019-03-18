var sum =0;
(function Sum(num){
    sum = sum + num;
    return Sum;       
})(2)(3)(4)

(function Sum(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
})(1)(2)(3);


const arr =[10,12,15,21];
for(var i=0; i<arr.length; i++){
    setTimeout(function(){
        console.log('inxex:' + i + 'element:' +arr[i]);
    },3000);
}

var movie = {
    name: 'Star Wars',
    episode: 7
  };
  
  var myEp = movie.episode;
  movie.episode = 8;
  
  
  console.log(myEp); // outputs 7