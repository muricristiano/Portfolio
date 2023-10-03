import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FiPhoneCall} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jo13est', 'template_o4yn1xn', form.current, 'Hro5kTmLVmMiDYFQF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

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
            <a href="mailto:muricristiano@gmail.com" target="_blank" rel="noreferrer">Send an email</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+351 939 186 221</h5>
            <a href="https://api.whatsapp.com/send?phone=351939186221" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <FiPhoneCall className="contact__option-icon"/>
            <h4>Call</h4>
            <h5>+351 939 186 221</h5>
            <a href="tel:+351939186221" target="_blank" rel="noreferrer">Call me now</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h3>Send a message</h3>
          <input type="text" name="name" placeholder="Your full name" required/>
          <input type="email" name="email" placeholder="Your email" required/>
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" value="Send" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )

}

export default Contact