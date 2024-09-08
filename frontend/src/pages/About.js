import React from "react";
import { ArrowRight, Mail, Instagram } from "lucide-react";

import tempProfile from "../images/tempProfile.png";
import tempImage from "../images/temp.jpg";

import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-hero">
          <h1>About Us</h1>
          <p>Creating Elegant Impressions, One Event at a Time</p>
        </div>

        <div className="about-container">
          <section className="about-intro">
            <div className="content-wrapper">
              <div className="text-content">
                <h2>Elegant Impressions</h2>
                <p>
                  Elegant Impressions Event and Design Solutions, LLC is a
                  premier event planning company based in Raleigh, North
                  Carolina. We offer a unique two-part service: expert
                  coordination and planning of events, coupled with exquisite
                  design and decoration to ensure a beautiful presentation for
                  your special occasion.
                </p>
              </div>
              <div className="image-content">
                <img src={tempImage} alt="Event Planning" />
              </div>
            </div>
          </section>

          <section className="company-vision">
            <div className="content-wrapper reverse">
              <div className="text-content">
                <h2>Our Vision</h2>
                <p>
                  At Elegant Impressions, we strive to become the leading brand
                  in event planning across Raleigh, North Carolina, and beyond.
                  Our client-focused approach and commitment to excellence drive
                  us to create unforgettable experiences that exceed
                  expectations.
                </p>
              </div>
              <div className="image-content">
                <img src={tempImage} alt="Our Vision" />
              </div>
            </div>
          </section>

          <section className="founder">
            <h2>Meet Our Founder</h2>
            <div className="founder-info">
              <img
                src={tempProfile}
                alt="Juwana Hancock"
                className="founder-image"
              />
              <div>
                <h3>Juwana Hancock, CAP-OM, CEP</h3>
                <p>
                  With over 15 years of experience in planning personal, social,
                  and business events, Juwana brings a wealth of knowledge and
                  creativity to every project.
                </p>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <h2>Ready to Make Your Event Memorable?</h2>
            <a href="/contact" className="cta-button">
              Get in Touch <ArrowRight size={18} />
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
