import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-image">
        <div className="contact-text">
          <h1>Contact</h1>
        </div>
      </div>
 
        <div className="container contact-container ">
          <div className="row">
            <div className="col-md-12 text-start">
              <h2>Contact Us</h2>
              <hr className="line line-hr-left" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row justify-content-between">
                <div className="col-md-5 contact-info">
                  <p>
                    Thank you so much for reaching out to us - we are excited to
                    connect with you! Tell us about you. If you do not receive a
                    response within 24 hours, please contact us directly via
                    email or phone.
                  </p>
                  <p>
                    <span className="contacts">Phone:</span> (877)303-8368
                  </p>
                  <p>
                    <span className="contacts">eMail:</span> email@email.com
                  </p>
                  <p>
                    <span className="contacts">Address:</span> Raleigh, NC
                  </p>
                </div>
                <div className="col-md-5 contact-form">
                  <h3>We look forward to being in touch!</h3>
                  <form className="row row-gap-3">
                    <input
                      className="col-md-5 contact-inputs"
                      type="text"
                      placeholder="Full Name"
                    />
                    <input
                      className="col-md-5 contact-inputs"
                      type="text"
                      placeholder="Email"
                    />
                    <input
                      className="col-md-5 contact-inputs"
                      type="text"
                      placeholder="Phone"
                    />
                    <input
                      className="col-md-5 contact-inputs"
                      type="text"
                      placeholder="Service Type"
                    />
                    <textarea
                      className="contact-inputs"
                      type="text"
                      placeholder="Message"
                    ></textarea>
                    <button className="col-md-2 contact-form-btn" type="submit">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Contact;
