import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const a = useRef(0)  //this helps to update the value across rerenders aapki value change nahi hoti,whereas agar simple const a use krre to as soon as a component renders a ki value 0 ho jaegi coz poora function firse chalega
  //and moreover agar state change hui to useEffect bhi chalega,but useRef se update krne pe useEffect nahi chalega
  const btn_ref = useRef()   //ref should point to only one DOM element,coz agar aapne multiple DOM elements ko ref kiya to woh last wala hi point karega


  useEffect(() => {
    a.current = a.current + 1 
    console.log(`rerendered ${a.current} times`)
  }, [count])

  useEffect(() => {
    console.log("first render")
    btn_ref.current.style.backgroundColor = "red"
  }, [])
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btn_ref} onClick={() => setCount((count) => count + 1)}>   
          {/* iss tarah se iss button ko ref krskte h  */}
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p  className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
