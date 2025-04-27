import { useState , useEffect  } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")  //state for the input text
  const [todos, setTodos] = useState([])  //state for the todos

  useEffect(() => {
    savetoLS()
  }, [todos])

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      setTodos(todos)
    }
  }, [])

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(),todo, isCompleted: false }])
    setTodo("")
    savetoLS()
  }
  const savetoLS=()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleEdit = (e,id) => {
    let t=todos.filter(item => item.id === id)
    setTodo(t[0].todo)
    handleDelete(e,id)
  }

  const handleDelete = (e,id) => {
    let newTodos=todos.filter(item => item.id !== id)
    setTodos(newTodos)
    savetoLS()
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleChechbox=(e)=>{
    let id = e.target.name;
    setTodos(todos.map(item => 
      item.id === id ? {...item, isCompleted: !item.isCompleted} : item
    ))
    savetoLS()
  }
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add Todo</h2>
          <input onChange={handleChange} value={todo} className='bg-white w-1/2' type="text" placeholder='Add a todo' />
          <button onClick={handleAdd} className='bg-violet-800 mx-2 rounded-full hover:bg-violet-950 p-4 py-2 text-sm font-bold text-white'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className='todos'>
          {todos.length===0 && <div className='text-center text-2xl font-bold m-3'>No todos found</div>}
          {todos.map(item => { 


            return <div key={item.id} className="todo flex w-1/4 justify-between my-3 ">
              <div className="flex gap-5">
              <input name={item.id} onChange={handleChechbox} type="checkbox" value={item.isCompleted} />
              <div className={item.isCompleted ? "line-through":""}>{item.todo} </div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e)=>handleEdit(e, item.id)} className='bg-violet-800 mx-2 rounded-full hover:bg-violet-950 p-4 py-2 text-sm font-bold text-white'>Edit</button>
                <button onClick={(e)=>handleDelete(e, item.id)} className='bg-violet-800 mx-2 rounded-full hover:bg-violet-950 p-4 py-2 text-sm font-bold text-white'>Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
