import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Blog</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="main__navbar">
      <div className="main__navbar-links">
        <div className="main__navbar-links_logo">
        <a href="index.html"><img src={logo} alt="logo" /></a>
        </div>

        <div className="main__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="main__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="main__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="#e7e7e7" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#e7e7e7" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="main__navbar-menu_container scale-up-center">
            <div className="main__navbar-menu_container-links">
              <Menu />
            
              <div className="main__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar