import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { counterContext } from './Context/context'  // Import the context,then whatever needs the value of the context can use it through the useContext hook.
import Navbar from './components/Navbar'
 
function App() {
  const [count, setCount] = useState(0) 

  return (
    <>
      <counterContext.Provider value={{count,setCount}}>    // Provide the context value to the code covered in this tag,so we can access count too and setCount too
        <Navbar/>
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
      </counterContext.Provider>
    </>
  )
}

export default App
//we use context hooks to provide the value to the components that are wrapped in the provider.
//it is better  to use this ,when we have to pass props to many components to finally reach the component that needs the value.
//u dont need to pass the value to each component in the tree,just pass it straight to the component that needs it.
//Agar aapki nested state me value miljaye directly without passing it to each component,then use context