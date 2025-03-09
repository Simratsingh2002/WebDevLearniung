//DEFAULT NAMES SUCH AS INDEX.HTML ARE AUTOMATICALLY SCANNED BY BROWSEWR WITHOUT EVEN GENERATING A REQUEST FOR THAT.
//JS which we link with html file (script src krke , we are using js for browser then), but here we are using js first then calling html which is technically backend js , so all the outputs will be in ide output ,not console
//Basically Router Concept is used when we dont want to have cluster of all urls in our one file,so we can create a different file for different urls(such as all with /blogs on our url) and then import them in our main file.


const express=require("express")
const app=express()
const blog= require('./routes/blog')    //now in blog variable blog.js is been imported


const port=3000

app.use(express.static("public"))
app.use('/blog',blog)   //for using blog.js file

app.get('/',(req,res)=>{    //for basic data fetch
    console.log("This is gET")   //on terminal on our console 
    res.send(`Hello World`)      //on server
})
app.post('/',(req,res)=>{      //for calling files or big data , and directly browser or link is not calling post , from another file i.e index2.html this request is s being made
    console.log("This is Post")
    res.send(`Hello World2`)   //for text
})
app.delete('/',(req,res)=>{     //for deleting data
    console.log("This is Delete")
    res.send(`Hello World3`)
})
app.put('/',(req,res)=>{        //for updating data
    console.log("This is Put")
    res.send(`Hello World4`)
}
)


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