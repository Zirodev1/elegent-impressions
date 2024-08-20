import React from "react";
import { ArrowRight, Mail, Instagram } from 'lucide-react';

import './About.css'

const About = () => {
  return (<>
  <div className="contact-image">
        <div className="contact-text">
          <h1>Welcome</h1>
        </div>
      </div>
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p className="tagline">Creating Elegant Impressions, One Event at a Time</p>
      </div>

      <section className="about-intro">
        <p>
          Elegant Impressions Event and Design Solutions, LLC is a premier event planning company based in Raleigh, North Carolina. We offer a unique two-part service: expert coordination and planning of events, coupled with exquisite design and decoration to ensure a beautiful presentation for your special occasion.
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-item">
            <h3>Social Events</h3>
            <ul>
              <li>Music entertainment evenings</li>
              <li>Children's parties</li>
              <li>Anniversary gatherings</li>
              <li>Retirement parties</li>
              <li>Date night itineraries</li>
              <li>Family reunions</li>
            </ul>
          </div>
          <div className="service-item">
            <h3>Corporate Events</h3>
            <ul>
              <li>Golf outings</li>
              <li>Galas</li>
              <li>Team building retreats</li>
            </ul>
          </div>
          <div className="service-item">
            <h3>Travel Planning</h3>
            <ul>
              <li>Family vacation research</li>
              <li>Cost analysis breakdown</li>
              <li>Detailed itinerary planning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="company-vision">
        <h2>Our Vision</h2>
        <p>
          At Elegant Impressions, we strive to become the leading brand in event planning across Raleigh, North Carolina, and beyond. Our client-focused approach and commitment to excellence drive us to create unforgettable experiences that exceed expectations.
        </p>
      </section>

      <section className="founder">
        <h2>Meet Our Founder</h2>
        <div className="founder-info">
          <img src="/path-to-founder-image.jpg" alt="Juwana Hancock" className="founder-image" />
          <div>
            <h3>Juwana Hancock, CAP-OM, CEP</h3>
            <p>With over 15 years of experience in planning personal, social, and business events, Juwana brings a wealth of knowledge and creativity to every project.</p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Our Creative Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/path-to-olivia-image.jpg" alt="Olivia Louise" />
            <h3>Olivia Louise</h3>
            <p>Wedding & Event Planner</p>
            <div className="team-contact">
              <a href="mailto:olivia@example.com" className="contact-link">
                <Mail size={18} />
                Email
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Instagram size={18} />
                Instagram
              </a>
            </div>
          </div>
          {/* Add more team members here */}
        </div>
      </section>

      <div className="cta-section">
        <h2>Ready to Make Your Event Memorable?</h2>
        <a href="/contact" className="cta-button">
          Get in Touch <ArrowRight size={18} />
        </a>
      </div>
    </div>
  </>
  );
}

export default About;