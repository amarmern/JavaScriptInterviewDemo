// console.log('Before');
// getUser(1, (user) =>{
//     console.log('User',user);
//     getRepositories(user.gitHubUser, (repos)=>{
//         console.log('Repos',repos);
//     })
// });  

//consume..
getUser(1)
    .then(user => getRepositories(user.gitHubUser))
    .then(repo => getCommits(repo[0]))
    .then(commits => console.log('commits'), commits)
    .catch(err => console.log('Error', err.message));


console.log('after');
//1..promises
function getUser(id,){
    return new Promise((resolve, resect)=>{
        //Kick of some Async operation
        setTimeout(()=>{
            console.log('fetching data from db');
            resolve({id: id, gitHubUser: 'akumar'}) 
        },200)        
    });
    
}

//2..promises
function getRepositories(username) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('calling github API');
            resolve(['repo1' , 'repo2' , 'repo3']);
        }, 2000);
    });
    
}

function getCommits(repo){
return Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log('calling hitHub API...');
        resolve(['commit']);
    }, 2000);
})
}
//Asychronous
//Async/await