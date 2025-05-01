import React from "react";
import "./Part4.css";

function ContactUs() {
  return (
    <section>
      <div className="container container-section" id="contact">
        <div className="small-box">
          <h1>CONTACT US</h1>
          <span className="line"></span>
          <p>
            Lorem ipsum dolor sit amet. Reprehenderit commodi at quaerat nulla
            possimus deserunt et iure minus consequatur ducimus?
          </p>
        </div>
        <div className="contact">
          <div>
            <div className="contact-info">
              <div>
                <p>Mobile phone</p>
                <p>+12234566</p>
              </div>
              <div>
                <p>Email Address</p>
                <p>demo@gmail.com</p>
              </div>
            </div>
            <form className="form">
              <legend style={{ paddingLeft: "9px" }}>
                Make an Appointment
              </legend>

              <input type="text" id="name" placeholder="Your name" />

              <input type="email" id="email" placeholder="Your email" />

              <textarea
                name="textarea"
                id="textarea"
                cols="48"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </form>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.283657558091!2d-78.46241652390881!3d37.24097687212475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b2455f4247cb43%3A0x6572fd5b1bcbf946!2sHampden-Sydney%20College!5e0!3m2!1str!2str!4v1741965628245!5m2!1str!2str"
              width="450"
              height="340"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
