import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <nav>
    <h1>LOGO</h1>
    <ul>
    <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"/contact"}>contact</Link></li>
    <li><Link to={"/about"}>about</Link></li>
    
    </ul>
    </nav>
  )
}

export default Header