const express=require('express');
const app=express();
const port=3000;
//Middleware is a function that runs before the request routers(i.e app.get ,etc) and it has access to the request object(req), the response object(res), and the next function in the application’s request-response cycle.  next() refers to the next middleware function in the stack. And as mentioned if it sends response then it will not go to the next middleware function nor the routers.


//Middleware 1
app.use((req,res,next)=>{ 
    req.simrat="Simrat";     //manipulating the request object before it reaches the routers
    console.log("Middleware 1");
    next();
}
);

//Middleware 2
app.use((req,res,next)=>{
    req.simrat=req.simrat+"Tavleen";     
    console.log("Middleware 2");
    next();
}
);

app.get('/',(req,res)=>{
    console.log("Get Request from"+req.simrat);
    res.send("Hello World");
}
);

app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
})
//MiddleWare is of 5 types:
//1.Application-level middleware  - app.use() which we created 
//2.Router-level middleware  - which a particular router file would uses
//3.Error-handling middleware - app.use((err,req,res,next)=>{console.log(err);})  //It has 4 parameters used to handle errors
//4.Built-in middleware - express.static('public')  //To serve static files  //express.json()  //express.urlencoded() for eg
//5.Third-party middleware - body-parser, cookie-parser, multer, etc.  //npm install body-parser ,app.use(bodyParser.json())   