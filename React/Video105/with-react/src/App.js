import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
//ik aise variable ko state kehte hain jo change ho sakta hai, jaise ki value
function App() {
  const[value, setValue] = useState(0) //it means make a state by name value and set its initial value to 0, whcih i can later change to setValue
  //in return , its writing java script react , syntatic sugar is html kind of code
  // {} we write pure java script code in it
  return (
    <div className="App">
      Hey Simrat here
      <div className="value">
        {value}
      </div>
      <button onClick={()=>{setValue(value+1)}}>
          Click me
        </button>
    </div>
  );
}

export default App;
