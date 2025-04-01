//With React you can divide ur app into components(means tukde) and then usse jagah jagah use kar sakte ho,if we update it once it will be updated everywhere it is used
//we can use it in other components as well
//useState is a hook in react, it is used to make a variable stateful
//ik aise variable ko state kehte hain jo change ho sakta hai, jaise ki value
// {} we write pure java script code in it


import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Navbar from './Component/navbar';
import Footer from './Component/footer';


//ik aise variable ko state kehte hain jo change ho sakta hai, jaise ki value
function App() {
  const[value, setValue] = useState(0) //it means make a state by name value and set its initial value to 0, whcih i can later change to setValue
  //in return , its writing java script react , syntatic sugar is html kind of code
  return (
    <div className="App">
      Hey Simrat here
      <Navbar logoText="Simrat"/>  
      {/* this is how we pass data to a component ,logoText is a prop  */}
      <div className="value">
        {value}
      </div>
      <button onClick={()=>{setValue(value+1)}}>
          Click me
        </button>
        <Footer/>
    </div>
  );
}

export default App;
