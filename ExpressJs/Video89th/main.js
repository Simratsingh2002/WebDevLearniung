//DEFAULT NAMES SUCH AS INDEX.HTML ARE AUTOMATICALLY SCANNED BY BROWSEWR WITHOUT EVEN GENERATING A REQUEST FOR THAT.


const express=require("express")
const app=express()
const port=3000

app.use(express.static("public"))

app.get('/',(req,res)=>{
    console.log("This is gET")   //on terminal on our console 
    res.send(`Hello World`)      //on server
})

app.post('/',(req,res)=>{
    console.log("This is Post")
    res.send(`Hello World2`)
})

app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
})