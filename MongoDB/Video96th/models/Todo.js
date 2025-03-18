//Models means the schema of the database, kis hisab se data store hoga in the database,what blueprint to be followed 
//so diffeeent models can be created for different collections in the database
//Todo is the name of the model which will be followed 
import mongoose from "mongoose";
const TodoSchema=new mongoose.Schema({     //creating a schema for the todo model
    title:{tyepe:String,required:true,default:"No Title"},  //title is a field in the schema and it is of type string and it is required,required only checks for a valid value when the field is explicitly present (even undefined or null will trigger an error).

    desc:String,
    isDone:Boolean
});
export const Todo=mongoose.model("Todo",TodoSchema); 
//Todo is the name of the model and TodoSchema is the schema of the model
// and second Todo(argument) is the name of the collection in the database
