import React from 'react'
import blocksGroup from '../../assets/blocksgroup.png'
import './learnmore.css'

const LearnMore = () => {
  return (
    <div className="main__learnmore-wrapper">
      <div className="main__learnmore section__padding" id="learnmore">
        <div className="main__learnmore-image">
          <img src={blocksGroup} alt="blocks group" />
        </div>
        <div className="main__learnmore-content">
          <h4>Reprehenderit in Voluptate Velit Esse</h4>
          <h1>Laboris nisi ut aliquip ex ea commodo consequat</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h4>Excepteur sint occaecat cupidatat non proident</h4>
          <div className="main__learnmore-cta-btn">
              <button type="button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnMore