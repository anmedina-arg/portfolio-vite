import React from "react";
import "./contact.css";
//import emailjs from "emailjs-com";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <h4>Email</h4>
            <h5>andres.medina.arg@gmail.com</h5>
            <a
              href="mailto:andres.medina.arg@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/andres-medina-arg/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </article>
          <article className="contact__option">
            <h4>Github</h4>
            <a
              href="https://github.com/anmedina-arg"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </article>
          {/* <article className="contact__option">
            <h4>WhatsApp</h4>
            <h5>+5493816713512</h5>
            <a href="https://wa.me/5493816713512?text=Hola,%20¿cómo%20estás?" target="_blank">
              Send a message
            </a>
          </article> */}
        </div>
        {/* END OF OPTIONS */}
      </div>
    </section>
  );
}

export default Contact;
