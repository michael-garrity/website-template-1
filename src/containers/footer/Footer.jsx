import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="main__footer section__padding" id="contact">
      <div className="main__footer-heading">
        <h1>Velit esse cillum dolore</h1>
      </div>

      <div className="main__footer-btn">
        <p>Contact us</p>
      </div>

      <div className="main__footer-links">
        <div className="main__footer-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="main__footer-links_div">
          <h4>Links</h4>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>LinkedIn</p>
        </div>
        <div className="main__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="main__footer-links_div main__footer-links_contact">
          <h4>Get in touch</h4>
          <h3>Email</h3>
          <p>example@domain.com</p>
          <h3>Phone</h3>
          <p>(000) 000-0000</p>
        </div>
      </div>
      <div className="main__footer-copyright">
        <p>© 2022 LoremIpsum. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer