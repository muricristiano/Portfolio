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
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Murilo Cristiano</h1>
        <h5 className="text-light"><SiJavascript className='icon'/> Javascript <span class="spacer"/> <SiTypescript className='icon' /> Typescript</h5>
        <h5 className="text-light"><FaReact className='icon'/> React <span class="spacer"/> <FaNodeJs className='icon'/> Node</h5>
        <h5 className="text-light">Fullstack Developer</h5>
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