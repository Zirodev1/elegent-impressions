import React from "react";
import { ArrowRight } from "lucide-react";

import founderImage from "../images/tempProfile.png";

import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 shadow-md p-12">
    <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-8">
      {/* Founder Image */}
      <div className="w-full md:w-1/4 h-[500px]">
        <img
          src={founderImage}
          alt="Founder"
          className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[150px] shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="about-section-content w-full md:w-1/2 text-left flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-wide mb-4">
          Elegant Impressions
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed ">
          EIEDS, LLC is a premier event planning company based in Raleigh, North Carolina. 
          We offer expert coordination and planning of events, coupled with exquisite design 
          and decoration for your special occasions.
        </p>
        
        <a
          href="/about"
          className="learn-more-btn"
        >
          Learn More
          <ArrowRight size={18} className="ml-2" />
        </a>
      </div>
    </div>
  </section>
  );
};

export default AboutSection;
