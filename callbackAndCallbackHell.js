console.log('Before');
getUser(1, (user) =>{
    console.log('User',user);
    getRepositories(user.gitHubUser, (repos)=>{
        console.log('Repos',repos);
    })
});  
console.log('after');
//1..callback
function getUser(id,callback){
    setTimeout(()=>{
        console.log('fetching data from db');
        callback({id: id, gitHubUser: 'akumar'}) 
    },200)
    
}

//2..callback
function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('calling github API');
        callback(['repo1' , 'repo2' , 'repo3']);
    }, 2000);
}
//Asychronous
//Async/await