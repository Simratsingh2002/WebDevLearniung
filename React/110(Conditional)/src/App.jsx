import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo too"
    },
    {
      title: "Hey I am grocery todo",
      desc: "I am a good todo but I am grocery todo"
    },

  ])
  // a component named Todo is created to show the todos
    const Todo = ({todo}) => {      
    return (<>
    <div className="m-4 border border-1 border-purple-400">

      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
    </div>
      </>)
  }

  return (
    <>
    {/* Below it is called confitional rendering , if showbtn true? then do this otherwise false */}
      {showbtn ? <button>Im a true button</button> : <button>Im a false button</button>}  
      {showbtn && <button>Im a true button</button>}  {/* this is also a way to do it , this says if true do this otherwise nthing*/}

      <button onClick={() => setshowbtn(!showbtn)}>Toggle</button>  
      {/* this tells whatever on click te change krdo jovi value si showbtn di */}
      {todos.map(todo=>{
        return <Todo todo={todo} key={todo.title} />  //this is how we pass props to a component,with {todo} as props,and key is used to identify the component uniquely(necesaary thing for list rendering in react,there has to something mentioned which is unique for each component)
      })}
    </>
  )
}

export default App
