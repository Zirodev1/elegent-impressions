import React from "react";
import { ArrowRight } from "lucide-react";

import tempProfile from "../images/tempProfile.png";
import tempImage from "../images/temp.jpg";

import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-page mt-16">
        <div className="about-hero">
          <h1>About Us</h1>
          <p>Creating Elegant Impressions, One Event at a Time</p>
        </div>

        <div className="container mx-auto px-4 py-16">
          <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Elegant Impressions</h2>
              <p className="text-lg leading-relaxed">
                Elegant Impressions Event and Design Solutions, LLC is a premier
                event planning company based in Raleigh, North Carolina. We
                offer a unique two-part service: expert coordination and
                planning of events, coupled with exquisite design and decoration
                to ensure a beautiful presentation for your special occasion.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={tempImage}
                alt="Event Planning"
                className="rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Vision Section */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                At Elegant Impressions, we strive to become the leading brand in
                event planning across Raleigh, North Carolina, and beyond. Our
                client-focused approach and commitment to excellence drive us to
                create unforgettable experiences that exceed expectations.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={tempImage}
                alt="Our Vision"
                className="rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Founder Section */}
          <section className="text-center mb-16">
            <div className="flex flex-col items-center gap-8 bg-gray-100 p-8 rounded-lg">
              <div>
                <h2 className="text-3xl font-bold mb-3">Meet Our Founder</h2>
              </div>
              <img
                src={tempProfile}
                alt="Juwana Hancock"
                className="w-64 h-64 rounded-full object-cover shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">
                  Juwana Hancock, CAP-OM, CEP
                </h3>
                <p className="text-lg leading-relaxed w-6/12 mx-auto">
                  With over 15 years of experience in planning personal, social,
                  and business events, Juwana brings a wealth of knowledge and
                  creativity to every project.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center bg-gray-100 p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Make Your Event Memorable?
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-yellow-500 transition-transform transform hover:scale-105"
            >
              Get in Touch <ArrowRight className="ml-2" size={18} />
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
