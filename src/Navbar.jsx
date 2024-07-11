import React from 'react'
import "./Navbar.css" 
import brandlogo from "./assets/brand_logo.png"

function Navbar() {
  return (
    <>
    <div className='NavbarDiv'>
    <nav className='navbar'>
        <img src={brandlogo} alt="" />
        <menu>
            <li>Menu</li>
            <li>Location</li>
            <li>Contact</li>
            <li>About</li>
        </menu>
        <button>login</button>
    </nav>
    </div>

    </>
  )
}

export default Navbar