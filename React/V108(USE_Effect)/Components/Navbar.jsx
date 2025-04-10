import React, { useEffect } from 'react'

const Navbar = ({ color }) => {
  // Case 1: Run on every render   (when a state is updated ,react will re-render the component)
  useEffect(() => {
    alert("Hey I will run on every render")
  })

  // Case 2: Run only on first render 
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render")
  }, [])

  // Case 3: Run only when certain values change
  useEffect(() => {
    alert("Hey I am running because color was changed")
  }, [color])

  
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")
    // Example of Cleanup function, this means agar achanak se component ko band kiya gaya ya hta diya gaya to ye return statement chalega
  // this is useful for cleaning up subscriptions, timers, or any other side effects that need to be cleaned up when the component unmounts.
    return () => {
      alert("component was unmounted")
    }
  }, [])

  return (
    <div>
      I am navbar of {color} color hehe..
    </div>
  )
}

export default Navbar