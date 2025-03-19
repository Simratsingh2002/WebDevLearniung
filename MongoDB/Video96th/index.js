 //USING MONGOOSE WE CAN EASILY CONNCT OUR EXPRESS APP TO MONGODB easily
 //Mongoose is a ODM(Object Data Modeling) library for MongoDB and Node.js
//It provides a simple schema based solution to model our application data
//a schema is a blueprint of the data that we want to store in the database
//means we have predefined the structure of the data that we want to store in the database

 import mongoose from "mongoose";
 import express from "express";
import {Todo} from "./models/Todo.js";

 let a=await mongoose.connect("mongodb://localhost:27017/todo");   //connection string to mongodb database named todo
 const app=express();
 const port=3000;

app.get("/",(req,res)=>{
    const todo=new Todo({
        title:"First Todo",
        desc:"This is the first todo",
        isDone:false
    });
    todo.save()
    res.send("Hello World");
}
);
app.get("/a",async (req,res)=>{
    const todos=await Todo.findOne({});  //a method of mongoose.model which is used to find the first document that matches the query
    res.json({title:todos.title,desc:todos.desc,isDone:todos.isDone});   //sending the response in json format of whatever we need
}
);
 app.listen(port,()=>{
     console.log(`Server is running on port ${port}`);
 });

 