 //USING MONGOOSE WE CAN EASILY CONNCT OUR EXPRESS APP TO MONGODB easily
 //Mongoose is a ODM(Object Data Modeling) library for MongoDB and Node.js
//It provides a simple schema based solution to model our application data
//a schema is a blueprint of the data that we want to store in the database

 import mongoose from "mongoose";
 let a=await mongoose.connect("mongodb://localhost:27017");   //connection string mongodb 
 