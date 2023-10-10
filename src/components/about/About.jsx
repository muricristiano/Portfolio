import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>


      <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>13+ Years working with general development technologies</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Software Engineering</h5>
              <small>+5 Years of coding development </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>E-commerce</h5>
              <small>9+ Years working in touch with e-commerce</small>
            </article>
          </div>

        <div className="container about__container">
          <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>

        </div>

        <div className="about__content">


            <p>
              <span className='bold-span'>Nature explorer, Neuroscience enthusiast & Visual arts lover. 
                  <br/>
                  <br/>
                    I <span className='primary-color-span'> thrive</span> on using complexity <br/> to make everyone's <span className='primary-color-span'> life</span>  more <span className='primary-color-span'> efficient. </span>
              </span>
            </p>
            <br/>
            <h5>Standards</h5>
            <p>Since my first experience working for a high-responsibility company that develops software for juridical systems. I have set my initial quality standard always high since them. My professional experience has allowed me to develop a large range of competencies.</p>
            <h5>Consistency</h5>
            <p>In the present moment, I am a current graduate student completing a degree next year in Superior Web Development Technology at Anhanguera University. Simultaneously, I am specializing through courses I consistently invest at the best coaching institution in my country.</p>
            <h5>Innovation</h5>
            <p>I regularly participate in coding events to stay up-to-date with the latest technologies and techniques, because maintaining a humble approach to learning is the key to maintain the mastery. </p>
            <p><span className='primary-color-span'>&gt;&gt; </span>I am eager to <span className='primary-color-span'>connect</span> with professionals that <span className='primary-color-span'>share</span> my interests and values! I am always open to <span className='primary-color-span'>collaborate</span> and share knowledge!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About