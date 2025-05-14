import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useForm} from 'react-hook-form'  //npm install react-hook-form

function App() {
  const{register,
    handleSubmit,
    watch,
    setError, //custom error setting 
    formState :{errors,isSubmitting},
  }= useForm({mode: 'onChange'});  //means useForm is a function that returns an object with properties,so we have selected the properties we need,and ochange means that the form will be validated on every change in the input fields in real time, not after the form is submitted.
  //and formState is an object that contains the state of the form, and errors is a property of that object.

  const onSubmit = async (data) => {
    //  await delay(2).then(()=>{
    //   console.log(data);
    //   if(data.username!=="simrat"){   //what if the username is not same as the the one in backend, we will set an error then.
    //     setError("wrongusername",{type:"manual",message:"username is not simrat"}) //custom error setting
    //   }
    // })
    let r = await fetch("http://localhost:3000" ,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)})
    let res = await r.text()
    console.log(data,res);
  }

  const delay = (d)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  return (
    // The register gets a function and is used to register an input element in a form.
    // When you call register('fieldName'), it returns an object with props (e.g., onChange, onBlur, value, ref) that you spread onto an input element to connect it to the form’s state.
//     register(name: string, options?: RegisterOptions)
// ... only works on complete objects to spread in jsx , not to solve the object in jsx.
//means {...object} spreads the object properties into the component as props.
    <>
    {isSubmitting && <div>Loading...</div>}
     <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='username' {...register("username",{required:{value:true,message:"This is required"},minLength: {value : 3 , message :"Lowest is 4 letter allowed"}, maxLength : {value: 8 , message :"max is 8"}})} type="text" />
        {errors.username && <p>{errors.username.message}</p>}
        {errors.wrongusername && <p>{errors.wrongusername.message}</p>} 
        <br />
        <input type="password" placeholder='password' {...register("password",{required:{value:true,message:"pass is needed"}})} />
        {errors.password && <p>{errors.password.message}</p>}
        <br />
          <input type="submit" disabled={isSubmitting} value="submit" />
      </form>
     </div>
    </>
  )
}

export default App
