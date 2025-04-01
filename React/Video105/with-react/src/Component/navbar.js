import React from 'react'
import Footer from './footer'

const Navbar = (props) => {
  return (
    <div>
      <div className="logo">{props.logoText}</div>   
      {/* //props is a object that is passed to the component, it is used to pass data to the component */}
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <Footer/>
    </div>
  )
}

export default Navbar