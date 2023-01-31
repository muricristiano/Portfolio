import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FiPhoneCall} from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>muricristiano@gmail.com</h5>
            <a href="mailto:muricristiano@gmail.com" target="_blank">Send an email</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+55 (48) 98839 4527</h5>
            <a href="https://api.whatsapp.com/send?phone=5548988394527" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <FiPhoneCall className="contact__option-icon"/>
            <h4>Call</h4>
            <h5>+55 (48) 98839 4527</h5>
            <a href="tel:+5548988394527" target="_blank">Call me now</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your full name" required/>
          <input type="email" name="email" placeholder="Your email" required/>
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )

}

export default Contact