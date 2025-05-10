import React from 'react'
import { NavLink } from 'react-router-dom'
//earlier we were using just Link but now we are using NavLink
// Link and Navlink are components from react-router-dom that allow you to create links to different routes in your application.
// NavLink is a special version of Link that can style itself as "active" when its route is matched and also gives u extra features like activeClassName, isActive, etc.

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
            <li>
                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/login">Login</NavLink>
            </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
// Link kya krta h vo aapko ek link deta h jisse aap kisi bhi page pr ja sakte ho bina page reload kiye.
// Link ko use krne se aapko page reload nahi karna padta.