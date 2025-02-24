function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather report");
            resolve(200);
        },4000)
    })
    }
//awqait cant be called normally it only comes in async function.
async function xyz() {     //async function only accepts a promise , await keyword tells first solve this and stop any asynrochized activiy
    await api();  //1st call
    await api(); //2nd call
}
xyz()
//TO DEAL WITH CALL BACK HELLS , WE GOT PROMISES , DO DEAL PRMOMISE HELL WE GOT ASYN.AWAIT.
//TO BASICLLY RESTRICT THE ASYCHRONIZE NATURE OF JS INCASE WE WANT TO STOP CODE EXECUTION FURTHER UNLESSS A LINE OF CODE HASNT BEEEN EXECUTED YET


function getData(dataID){
    return new Promise((resolve,reject)=>{setTimeout(()=>{
        console.log("data",dataID);
        resolve("success");
    },2000)})
    
  }
//CALL BACK HELL     abnd PROMISE HELL OF THESE CODES VISIT PREVIOUS VIDEO CODES.
//SOLVING BY ASYNC AWAIT
async function getalldata() {
    await getData(1);
    await getData(2);
    await getData(3);
}
getalldata()
//NOW RUNNIBNG THIS WHOLE FILE WOULD ALSO CAUSE ISSUE,AS xyz() and getalldata() are called together ,so getting expected out like weather report,weather report ,data 1 ,data 2 ,data 3 isnt possible .
//but there is a solution to this ask gpt
//IIFE CAN BE USED TO EXECUTE CODE ON SPOT.