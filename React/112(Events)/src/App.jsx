import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Harry")
  const [form, setForm] = useState({})

  const handleClick = () => {
    alert("Hey I am clicked")
  }

  const handlechange = (e) => {
    setName(e.target.value)
  }

  const handleChangeForm = (e) => {
    // setName(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})   
    // ...form means Take all the key-value pairs from the existing form object and copy them into this new object.
    // setForm ...form here opens the object and then we are adding the new key value pair to the object
    console.log(form)
  }

  return (
    <>
     <div className="button">
        {/* event handler */}
        <button onClick={handleClick}>click me</button>  
     </div>  
     {/* below is the way to handle  input field */}
     <input type="text" value={name} onChange={handlechange}/>
     <div className="form">
        {/* whatever value user chages or puts in the input field, it will be stored in the state that will be used to show the value in the input field */}
        <input type="text" name='email' value={form.email?form.email:""} onChange={handleChangeForm}/>
        <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handleChangeForm}/>
     </div>
    </>
  )
}

export default App