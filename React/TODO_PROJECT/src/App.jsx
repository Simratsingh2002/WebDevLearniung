import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]"> 
        <div className="addTodo">
        <h2 className='text-lg font-bold'>Add Todo</h2>
        <input className='bg-white w-1/2' type="text" placeholder='Add a todo' />
        <button className='bg-violet-800 mx-2 rounded-full hover:bg-violet-950 p-4 py-2 text-sm font-bold text-white'>Add</button>
        </div>
          <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className='todos'>
        <div className="todo flex">
          <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
          <div className="buttons">
            <button className='bg-violet-800 mx-2 rounded-full hover:bg-violet-950 p-4 py-2 text-sm font-bold text-white'>Edit</button>
            <button className='bg-violet-800 mx-2 rounded-full hover:bg-violet-950 p-4 py-2 text-sm font-bold text-white'>Delete</button>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
 