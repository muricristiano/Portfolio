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


            <p><span className='bold-span'>Nature explorer, Neuroscience enthusiast & Visual arts lover. <br/> I'm a <span className='primary-color-span'>JavaScript Full Stack Developer</span>.</span></p>
            <h5>Past</h5>
            <p>I have a background in high responsibility companies who for example developed softwares for Juridic Systems. My professional experience has allowed me to develop a range of competencies, including JavaScript, TypeScript, React, Node.js, etc. (All skills are on competences sections with Linkedin's Certificate Competence Seals).</p>
            <h5>Present</h5>
            <p>I am a motivated individual with a passion for upgrading people's lives with technology. I am constantly seeking new challenges to grow and learn, both professionally and personally.</p>
            <h5>Future</h5>
            <p>I am a current student of WEB development at Anhanguera University and I am also taking specialized courses to enhance my skills and speed up my learning. In addition to my studies, I regularly participate in coding events with Rocketseat to further develop my skills and stay up-to-date with the latest technologies. </p>
            <p><span className='primary-color-span'>&gt;&gt; </span>I am eager to <span className='primary-color-span'>connect</span> with professionals that <span className='primary-color-span'>share</span> my interests and values! I am always open to <span className='primary-color-span'>collaborate</span> and share knowledge!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About