//console.log('before')
//getUser(1,useri)
// console.log(user)
//console.log('after')

// function useri(user){
//     console.log('User',user)
//     getRepositories(user.gitHubusername,reposi)
// }

// function reposi(repos){
//     console.log('Repos',repos)
// }


// getUser(1)
//   .then(user=> getRepositories(user.gitHubusername))
//   .then(repos => console.log(repos[0]))
//   .catch(err => console.log(err.message))

// async and await lets us write synchronous code like asynchronous code
// aync and await are built on top of promise
// basically syntactical sugar

async function displayres(){
    try {
        const user = await getUser(1)
        console.log(user)
        const repos = await getRepositories(user.gitHubusername)
        console.log(repos)
    }
    catch(err){
        console.log(err.message)
    }
}

displayres()



function getUser(id) {
    // setTimeout async or non-blocking function schedules a task to be performed in the future
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log('Reading a user from database...')
            resolve({id: id, gitHubusername: 'deepblues' })
        },2000)
    })
}

function getRepositories(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Getting Github repos')
            // resolve(['repo1', 'repo2', 'repo3'])
            reject(new Error('could not get repos'))
        },2000)
    })
    
}