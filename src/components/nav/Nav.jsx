import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {GiSkills} from 'react-icons/gi'
import {TbMessage2} from 'react-icons/tb'
import {AiOutlineArrowDown} from 'react-icons/ai'

const Nav = () => {
  
  return (
    <nav> 
      <a href="#header"><AiOutlineHome size="1.2em"/></a>

      <a href="#about"><AiOutlineUser size="1.2em"/></a>

      <a href="#skills"><GiSkills size="1.2em"/></a>

      <a href="#portfolio"><BiBook size="1.2em"/></a>

      <a href="#contact"><TbMessage2 size="1.2em"/></a>

      <a href="#footer"><AiOutlineArrowDown size="1.2em"/></a>
    </nav>
  )
}

export default Nav