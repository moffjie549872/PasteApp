import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
<div className="flex justify-evenly items-center gap-7 ">
  <NavLink to="/" className="block">Home</NavLink>
  <NavLink to="/paste" className="block">Paste</NavLink>
</div>

  )
}

export default NavBar