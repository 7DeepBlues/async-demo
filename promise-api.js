
// // const p = Promise.resolve({id: 1})
// const p = Promise.reject(new Error('reason for rejection...'))
// p
// .then(result => console.log(result))
// .catch(err => console.log(err))

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async operation1...')
        // reject(new Error('something failed...'))
        resolve(1)
    },2000)
})
const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Async operation2...')
        resolve(2)
    },2000)
})


// if we want all to execute we give Promise.all(p1,p2)
Promise.race([p1,p2])
    .then((result)=> console.log(result))
    .catch(err => console.log('Error'+ err.message))