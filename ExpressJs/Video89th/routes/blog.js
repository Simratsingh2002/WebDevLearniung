const express=require("express")
const router=express.Router()

//define the page with blog page route
router.get('/',(req,res)=>{
    res.send("This is Blog Page")
})

//define the about page with blog page route
router.get('/about',(req,res)=>{
    res.send("This is Blog About Page")
})

module.exports=router