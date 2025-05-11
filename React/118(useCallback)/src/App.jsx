import { use, useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'

 function App() {
  const [count, setCount] = useState(0)
  //use callback memoizes the function and prevents it from being recreated on every render. 
  const getAdjective = useCallback(() => {
    return "good"+count
  }
  ,[count])
  return (
    <>
    <Navbar  adjective={"good"}  getAdjective={getAdjective} />
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
//when we add getAdjective to the dependency array of useCallback, it will be recreated every time the component re-renders, which will cause the Navbar component to re-render as well. This is because the getAdjective function is a new reference each time it is created, and memo will not be able to prevent the re-rendering of the Navbar component. So prop changes everytime and it will re-render the Navbar component. 
//So we need to use useCallback to memoize the function and prevent it from being recreated on every render. So useCallback freezes that function and it will be recreated on rerender only if the dependencies change.b