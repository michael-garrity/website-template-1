import React from 'react'
import { Feature } from '../../components'
import './about.css'

const About = () => {
  return (
    <div className="main__about-wrapper" id="about">
    <div className="main__about section__margin">
      <div className="main__about-feature">
        <div />
        <h1>Lorem Ipsum Dolor</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="main__about-heading">
        <h1>Excepteur sint occaecat cupidatat non proident</h1>
      </div>
      <div className="main__about-container">
        <Feature title="Lorem" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <Feature title="Ipsum" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <Feature title="Dolor" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
      </div>
    </div>
    </div>
  )
}

export default About