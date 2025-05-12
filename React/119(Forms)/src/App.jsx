import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="conatiner">
      <form action="">
        <input type="text" name='username' />
        <input type="password" />
        <input type="submit" name='fsd' value={true} />
      </form>
     </div>
    </>
  )
}

export default App
