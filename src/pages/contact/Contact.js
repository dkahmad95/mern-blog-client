import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether you have questions, feedback, or
        just want to say hello, feel free to reach out to us. Here are a few
        ways you can get in touch:
      </p>
      <h2>Email</h2>
      <p>
        Send us an email at{" "}
        <a href="mailto:Dkahmad95@gmail.com">Dkahmad95@gmail.com</a> and we’ll
        get back to you as soon as possible.
      </p>
      <h2>Social Media</h2>
      <p>
        Follow us on social media to stay updated with the latest news and
        connect with our community:
      </p>
      <ul>
        <li>
          <a
            href="https://linkedin.com/in/ahmad-dekmak"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/ahmad.dekmak.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ahmad.ali.dekmak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://github.com/dkahmad95"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
      <h2>Address</h2>
      <address>
        +961-78940697 
        <span>  Beirut,</span>
        <br />
        Lebanon
      </address>
    </div>
  );
};

export default Contact;
