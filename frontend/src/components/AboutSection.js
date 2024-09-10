import React from "react";
import { ArrowRight } from "lucide-react";

import founderImage from "../images/tempProfile.png";

import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-section-container">
        <div className="about-section-founder-image">
          <img src={founderImage} alt="Founder" />
        </div>
        <div className="about-section-content">
          <h2>Elegant Impressions</h2>
          <p>
            EIEDS, LLC is a premier
            event planning company based in Raleigh, North Carolina. We offer
            expert coordination and planning of events, coupled with exquisite
            design and decoration for your special occasions.
          </p>
          
          <a href="/about" className="learn-more-btn">
            Learn More <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
