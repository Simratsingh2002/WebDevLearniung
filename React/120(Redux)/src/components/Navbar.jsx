import React from 'react'
import { useSelector } from 'react-redux'  
import { useDispatch } from 'react-redux' 

const Navbar = () => {
  const count= useSelector((state) => state.counter.value)
  return (
    <div>
      Im Navbar and counter is {count}
    </div>
  )
}

export default Navbar
