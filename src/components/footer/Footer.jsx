import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>MURILO CRISTIANO</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/muri.cristiano" target='_blank'><AiOutlineInstagram className='footer__socials-icon'/></a>
        <a href="https://facebook.com/muri.cristiano" target='_blank'><AiOutlineFacebook className='footer__socials-icon'/></a>
        <a href="https://linkedin.com/in/muricristiano" target='_blank'><AiOutlineLinkedin className='footer__socials-icon'/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Murilo Cristiano. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer