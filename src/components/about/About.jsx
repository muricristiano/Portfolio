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

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>13+ Years Working with General Technologies</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>E-commerce</h5>
              <small>9+ Years In touch with Ecommerce at work</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>

            <p>🧔🏻‍♂️ Brazilian, nature lover and sports enthusiast. I'm a JavaScript Full Stack Developer.</p>
            <p>💡I am a motivated individual with a passion for upgrading people's lifes with technology. I am constantly seeking new challenges to grow and learn, and I have endless potential for personal and professional development.</p>
            <p>💼 I have a background in high responsability companies who for example developed softwares for Juridic Systems. My professional experience has allowed me to develop a range of competencies, including JavaScript, TypeScript, React, Node.js, etc. (All skills are on competences sections with Linkedin's Certificate Competence Seals).</p>
            <p>📖 I am a current student of WEB development at Anhanguera University and I am also taking specialized courses to enhance my skills and speed up my learning. In addition to my studies, I regularly participate in coding events with Rocketseat to further develop my skills and stay up-to-date with the latest technologies. </p>
            <p>🤜🏻🤛🏾 I am eager to connect with professionals that share my interests and values! I am always open to collaborate and share knowledge!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About