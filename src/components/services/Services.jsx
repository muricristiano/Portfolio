import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>

        {/* CARD 1 */}
        <article className='service'>
          <div className='service__head'>
            <h3>Frontend</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* CARD 2 */}
        <article className='service'>
          <div className='service__head'>
            <h3>Backend</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* CARD 3 */}
        <article className='service'>
          <div className='service__head'>
            <h3>Fullstack</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services