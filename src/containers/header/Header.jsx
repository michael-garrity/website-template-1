import React from 'react'
import './header.css'
import users from '../../assets/users.png'
import blocks from '../../assets/blocks.png'

const Header = () => {
  return (
    <div className="main__header section__padding" id="home">
      <div className="main__header-content">

        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div className="main__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="main__header-content__users">
        <img src={users} alt="" />
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
      </div>
      </div>
      <div className="main__header-image">
        <img src={blocks} alt="blocks" />
      </div>
    </div>
  )
}

export default Header