

console.log("Hi im simrat")
console.log("hi im tavleen")
setTimeout(()=>{                          //This is asynchronize function , so it is not necessary that JS would run in a synchronize way. It will put this method on hold by running the remaining scri;t first , then it will print this method
    console.log("im timeout function")
},0)
console.log("the end")

//callback is a higher-order function (a function that takes another function as an argument), arrow functions keep it clean.
const fn = () => {
    console.log("Nothing")
  }
  
  const callback = (arg, fn) => {
      console.log(arg)
      fn()
  }
  
  const loadScript = (src, callback) => {
      let sc = document.createElement("script");  //this just makes script element temporarily in memory , wont be added unless its not appened
      sc.src = src;
      sc.onload = callback("Harry", fn);   //.ONLOAD MEANS WHEN ITS DONE EXECUTING
      document.head.append(sc)
  }
  loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )

  //THIS SUBROUTINE CALLSBACK FUNCTIONS A LOT , TO AVOID CALLING FUNCTIONS INSISE DUNCTIONS INSIDSE FUNCTIONS WE USE PROMISES.



  function getData(dataID,getNextData){
    setTimeout(()=>{
        console.log("data",dataID);
        if (getNextData){
            getNextData();
        }
    },2000)
  }
  //IN JS IF A FUNCTION EXPEXTS TWO PARAMTERS , AND WE ONLY GIVE ONE IT CONSODERS THE OTHER ONE AS UNDEFINED , IT DOESNT THROW ERROR AS IN PYTHON 
  //alwsys do call back functions like this, not getData(1,getData(2)) , as doing paranthesis it will call it immediately
getData(1,()=>{               
    getData(2,()=>
    {
        getData(3)
    })
})