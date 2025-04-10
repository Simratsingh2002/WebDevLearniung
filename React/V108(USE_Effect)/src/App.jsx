import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
//useeffect is a hook which is happens or performs an activity when a component renders.
//below is an example of use effect
//initally every useeffect will trigger twice , coz of react.strictmode(in development mode it runs twice ,one to check for errors and one to actually run the code)(turn that off in main.jsx it will only run once then)


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    alert('hello')    //aise tbhi kro jb kuch bhi change ho jo bi array ke andr hai(jo neeche h)
  }, [])

  useEffect(() => {    //this will take place when count was changed , but even before that it triggers once as well
    alert('count was changed')
    setColor(color + 1)
  }, [count])
  
  
  

  return (
    <>
    {/* <Navbar color={"navy " + "blue" + color} /> */}
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
