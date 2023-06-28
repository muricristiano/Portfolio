import React from 'react'
import './skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Tools I Know</h5>
      <h2>My Skills</h2>
      <div className="container skills__container">
          <div className="skills__frontend">
            <h3>Frontend Development</h3>
            <div className="skills__content">
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                    <h4>TypeScript</h4>
                    <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                    <h4>JavaScript</h4>
                    <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                    <h4>React JS</h4>
                    <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                    <h4>React Native</h4>
                    <small className='text-light'>Essential</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                    <h4>HTML5</h4>
                    <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                    <h4>CSS Libraries</h4>
                    <small className='text-light'>Essential</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                    <h4>Shopify</h4>
                    <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>

          <div className="skills__backend">
          <h3>Backend Development</h3>
            <div className="skills__content">
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                  <h4>API's</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                  <h4>SQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                    <h4>Oracle</h4>
                    <small className='text-light'>Essential</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Basics</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                    <h4>Prisma</h4>
                    <small className='text-light'>Essential</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                  <h4>Web Services</h4>
                  <small className='text-light'>Basics</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsFillPatchCheckFill className='skills__details-icon'/>
                <div>
                    <h4>Git / Github</h4>
                    <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>
      </div>
    </section>
  )
}


export default Skills