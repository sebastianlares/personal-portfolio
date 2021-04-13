import React, { useState, useEffect } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";
import "aos/dist/aos.css";

function Contact() {
  const [eTarget, setETarget] = useState();
  const [email, setEmail] = useState();
  const [checkEmail, setCheckEmail] = useState(false);

  const API_KEY = process.env.REACT_APP_EMAILJS_API_KEY;

  const submitHandler = (e) => {
    e.preventDefault();
    checkEmail && setETarget(e.target);
  };

  const emailHandler = (mail) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(mail).toLowerCase())) {
      return alert("Please provide a valid email address.");
    } else return setCheckEmail(true);
  };

  const saveEmail = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    eTarget &&
      emailjs
        .sendForm("portfolio_contact", "portfolio_contact", eTarget, API_KEY)
        .then(
          ((err) => {
            alert("Something went wrong. Please try again!");
          },
          (res) => {
            alert("Email sent");
            document.querySelector(".contact-form").reset();
          })
        );
  }, [eTarget]);

  return (
    <div className="contact-container">
      <div className="img-container">
        <h3>Get in touch</h3>
        <img
          src="https://image.freepik.com/free-vector/e-mail-news-subscription-promotion-flat-vector-illustration-design-newsletter-icon-flat_1200-332.jpg"
          alt="email"
        />
      </div>
      <form
        onSubmit={submitHandler}
        data-aos="flip-up"
        data-aos-duration="1400"
        className="contact-form"
      >
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          required
          onChange={(e) => saveEmail(e)}
        />
        <label>Message</label>

        <textarea name="message" required></textarea>
        <button type="submit" onClick={() => emailHandler(email)}>
          Send
        </button>
      </form>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/sebasti%C3%A1nlares/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/sebastianlares"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Contact;
