import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective,getAdjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
      I am a {adjective} Navbar
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)   //this will prevent the component from re-rendering if the props are the same,so we will only seee the console log when the props change
