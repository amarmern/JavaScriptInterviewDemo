//way for async..
console.log('Before');
setTimeout(() => {
  console.log('Reading data from database');
}, 2000);

console.log('After');

// we are getting undefined..

console.log('Before');
const user= getUser(1); // undefined becg after 2 second returning the value 
//since already this func has been executed 
console.log(user);
console.log('After');

function getUser(id){
  setTimeout(() => {
    console.log('Reading data from database');
    return {id : id , userName:'Amrendra'}
  }, 2000);
}


//sollution is
//callback , Promise, Async and wait

//1st solution using callback

console.log('Before');
 getUser(1, function(user){
   console.log('User', user);
 }); 

console.log('After');

function getUser(id , callback){
  setTimeout(() => {
    console.log('Reading data from database');
    callback({id : id , userName:'Amrendra'});
  }, 2000);
}

//or
//1st solution using call back

console.log('Before');
 getUser(1, function(user){   
   //get Repository
  getRepositories(user.userName,(repo)=>{
    console.log('Repos', repo)
  })
 }); 

console.log('After');

function getUser(id , callback){
  setTimeout(() => {
    console.log('Reading data from database');
    callback({id : id , userName:'Amrendra'});
  }, 5000);
}

function getRepositories(userName ,callback){
  setTimeout(() => {
    console.log('Calling githubs API..');
    callback( ['repo1', 'repo2', 'repo3'] );
  }, 2000);
  
}



//2nd solution using promise

const p = new Promise((resolve , reject) =>{
   resolve(1);
});

p.then(result => console.log('Result', result));

//or
//2nd solution using promise

const p = new Promise((resolve , reject) =>{
  setTimeout(() => {
     resolve(1);
     reject(new Error('message'))
  }, 2000);
  
 
});

p.then(result => console.log('Result', result))
.catch(err => console.log('Error', err.message));

//for simultinosally calling more than one API

//2nd solution using promise

const p1 = new Promise((resolve ) =>{
  setTimeout(() => {
    console.log('Async operation 1...');
    resolve(1);
  }, 2000); 
});

const p2 = new Promise((resolve ) =>{
  setTimeout(() => {
    console.log('Async operation 2...');
    resolve(2);
  }, 2000); 
});

Promise.all([p1,p2])
.then(result=>console.log(result));

//or use of all
  

const p1 = new Promise((resolve ) =>{
  setTimeout(() => {
    console.log('Async operation 1...');
    resolve(1);
  }, 2000); 
});

const p2 = new Promise((resolve,reject ) =>{
  setTimeout(() => {
    console.log('Async operation 2...');
    reject(new Error('because something failed'));
  }, 2000); 
});

Promise.all([p1,p2])
.then(result=>console.log(result))
.catch(err=> console.log('Error' , err.message));

//or use of race

const p1 = new Promise((resolve ) =>{
  setTimeout(() => {
    console.log('Async operation 1...');
    resolve(1);
  }, 2000); 
});

const p2 = new Promise((resolve,reject ) =>{
  setTimeout(() => {
    console.log('Async operation 2...');
    reject(new Error('because something failed'));
  }, 2000); 
});

Promise.race([p1,p2])
.then(result=>console.log(result))
.catch(err=> console.log('Error' , err.message));

//3rd solution using promise

async function displayCommits(){
  const user = await getUser(1);
  const repos = await getRepositories(user.gitHubUsername);
  const commits = await getCommits(repos[0]);
  console.log(commits)
}

displayCommits();

