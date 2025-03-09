// nodemon main.js  write krne se hmne nodemon activate krdia is file pe , which means srver will automatically restart when we update the code
//did change just a comment

const express=require('express');   //impprted express
const app=express()
const port=3000
app.use(express.static('public'))     //this would allow only files , inside this public folder can be accessed by users as a static file.

app.get('/',(req,res)=>{     //means jab bhi iss path(1st param) pe koi request aye ye handler chlado, handler is the function which is in 
res.send('Hello World')      // 2nd paramter
})

app.get('/blog',(req,res)=>{
  res.send(`Opening Blog`)
})

// app.get('/:slug/:second',(req,res)=>{               //slug is a type of parameter, and through going in req object we can retrieve that as well
//   res.send(`Opening Blog and its ${req.params.slug} + ${req.params.second}`)
// })

app.get('/blog/:slug', (req, res) => {
  // logic to fetch {slug} from the db
  // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
  console.log(req.params) // will output { slug: 'intro-to-padosi' }  from req object
  console.log(req.query) // will output { mode: 'dark', region: 'in' }
})



app.listen(port, () => {    //to start server
    console.log(`Server is running on http://localhost:${port}`);
  });


  