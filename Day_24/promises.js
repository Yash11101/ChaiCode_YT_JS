// const promiseOne=new Promise(function(resolve,reject){
//     //does an async task
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
    
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
        
//     },1000)
// }).then(function(){
//     console.log("Async task 2 resolved");
    
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"yash",age:19,email:"yash@example.com"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
    
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error= true
//         if (!error){
//             resolve({username:"yash",city:"mumbai"})
//         }
//         else{
//             reject("ERROR: Something went wrong")
//         }
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
    
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("the promise is either resolved or rejected");
// })

// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if (!error){
//             resolve({username:"Javascript",password:"12345"})
//         }
//         else{
//             reject("ERROR: JS went wrong")
//         }
//     },1000)
// })
// async function consumePromiseFive(){
//     try{
//         const response=await promiseFive
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
        
//     }
    
    
// }
// consumePromiseFive()

// async function getUsers(){
//     try{
//         const response=await fetch("https://api.github.com/users/Yash11101")
//         const data=await response.json()
//         console.log(data);
//         // console.log(data["login"]);
//     }
//     catch(error){
//         console.log("Error: ",error);
//     }
// }
// getUsers()

fetch("https://api.github.com/users/Yash11101") //this returns a promise, hence can use then/catch/finally
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})
    