var data = [
    { "name": "bill", "age": 20 },
    { "name": "jhon", "age": 19 },
    { "name": "steve", "age": 16 },
    { "name": "larry", "age": 22 },
    null, null, null
  ];
  
  //eliminate all the null values from the data
  data = data.filter(function(x) { return x !== null }); 
  
  console.log("data: " + JSON.stringify(data));
  
  var elemnts = [1,null, 2, null,3,4];
  //elemnts = elemnts.filter((x) => x != null);
  //console.log(elemnts);
  var tempArr = [];
  for(let i =0; i< elemnts.length; i++){
    if(elemnts[i] != null){
      console.log(tempArr[tempArr.length]= elemnts[i]);
    }  
  }
  
  