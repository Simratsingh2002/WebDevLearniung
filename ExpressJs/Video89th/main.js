//DEFAULT NAMES SUCH AS INDEX.HTML ARE AUTOMATICALLY SCANNED BY BROWSEWR WITHOUT EVEN GENERATING A REQUEST FOR THAT.
//JS which we link with html file (script src krke , we are using js for browser then), but here we are using js first then calling html which is technically backend js , so all the outputs will be in ide output ,not console


const express=require("express")
const app=express()
const port=3000

app.use(express.static("public"))

app.get('/',(req,res)=>{    //for basic data fetch
    console.log("This is gET")   //on terminal on our console 
    res.send(`Hello World`)      //on server
})
app.post('/',(req,res)=>{      //for calling files or big data , and directly browser or link is not calling post , from another file i.e index2.html this request is s being made
    console.log("This is Post")
    res.send(`Hello World2`)   //for text
})

app.get('/index',(req,res)=>{
    res.sendFile('Templates/index.html',{root:__dirname})             //sending file function used to send file and start file.
})   //here when senfile executes express or browser dont know where is template folder , so we have to give the path of the folder where the file is present or we can specify what is root.

app.get('/api',(req,res)=>{
    res.json('{"name":"Aman","age":21}')   //for json data   //json is used to send data in json format
}
)

app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
})