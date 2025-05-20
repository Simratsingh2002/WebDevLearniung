import './App.css'
import Navbar from './components/Navbar'  
//npm install @reduxjs/toolkit react-redux
import { useSelector } from 'react-redux'  //useSelector is imported from react-redux to access the state from the store.
import { useDispatch } from 'react-redux'  //useDispatch is imported from react-redux to dispatch the actions to the store,to run the functions in the slice.
import { increment,decrement ,incrementByAmount} from './redux/counter/counterslice'

function App() {
  const count= useSelector((state) => state.counter.value)  //hmare redux store se count ki value lao
  const dispatch = useDispatch()  //dispatch function ko use kro jo ki redux se aata hai.

  return (
    <>
      <Navbar />
      <div>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
        {count}
        <button onClick={()=>{dispatch(increment())}} >+</button>
        <br />
        <button onClick={()=>{dispatch(incrementByAmount(6))}} >increase by amount 6</button>
      </div>
    </>
  )
}

export default App
//it is not possible for a component to read a state variable from another component without passing it as a prop.
//We use redux to avoid props drilling.  
//Redux store is a single source of truth for the entire application, jahan pe saari state store hoti hai.