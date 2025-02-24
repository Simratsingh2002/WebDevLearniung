
// //A Promise in JavaScript is an object that represents the eventual completion (success) or failure of an asynchronous operation. It is used to handle asynchronous tasks like:
// // Fetching data from an API
// // Reading a file
// // Performing delayed tasks (like setTimeout)
// console.log("This is promises")
//Promise function has two arguments resolve,reject , if jo vada kra tha to poora hua resolved h to ye task kro , reject pe ye.
//SUPPOSE API SE DATA FETCH KRTE DELAY HUA TO VO DATA ANE TK IK PROMISE RETURN KRDEGA

// let prom1= new Promise((resolve,reject)=>{            //Promise is a JavaScript class, and we need new to create an instance of it.
//     let a=Math.random();
//     if (a<0.5){
//         reject("No random number was not supporting you");
//     }
//     else{
//         setTimeout(()=>{
//             console.log("Yes I am done")
//             resolve("Harry")
//         },3000)
//     }
// })          
// prom1.then((a)=>{                 //if resolved , HERE  a conist of the msg put in the resolve in the promise
//     console.log(a)
// }).catch((err)=>{                  //IF REJECTED 
//     console.log(err)
// })

console.log('This is Promises');
//HERE PROM 1 WILL SAVE A PROMISE , WE CAN CHECK IN CONSOLE,IF PROMISE OBJECT IS IN WHCIH STATE , PENDING,FULFILLED OR REJECTED? 
let prom1 = new Promise((resolve, reject) => {
    let a = 0.4
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Harry")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = 0.6
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, 1000);
    }
})

 
let p3 = Promise.all([prom1, prom2])         //this rune both parallely 
p3.then((a)=>{                  //if both success 
    console.log(a)
}).catch(err=>{                  //rejection message (error) is automatically passed to .catch(), which then logs it.
    console.log(err)
})
//more method Promise.allsetled     ,.race  , .any   , .resolve  , .reject




//ANOTHER SUBROUTINE WHICH IS PROMISE CHAINING, means data 1 bulao , agr vo aya fer data 2 fer data 3 uske success pe
//similarily to tackle promise chaining will difficult in complex code , so we intoduce async , await. visit nwxt video for that.
function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data"+dataID)
            resolve("success")
        },1000)
    })
}
getData(1).then((result)=>{
    console.log(result)
    return getData(2)
}).then((result)=>{
    console.log(result)
    return getData(3)
}).then((result)=>{
    console.log(result)
})
