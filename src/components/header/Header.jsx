import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import {SiJavascript} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <div className="presentation">
          <h5>Hi, I'm</h5>
          <h1>Murilo Cristiano</h1>
          <h4>Fullstack Developer</h4>
        </div>
        <div className="stacks">
          <div className="stacks-items">
            <SiJavascript className='icon'/>
            <h5 className="text-light">Javascript</h5>
          </div>
          <div className="stacks-items">
            <SiTypescript className='icon' />
            <h5 className="text-light">Typescript</h5>
          </div>
          <div className="stacks-items">
            <FaReact className='icon'/>
            <h5 className="text-light">React</h5>
          </div>
          <div className="stacks-items">
            <FaNodeJs className='icon'/>
            <h5 className='text-light'>Node.JS</h5>
          </div>
        
        </div>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#footer" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header