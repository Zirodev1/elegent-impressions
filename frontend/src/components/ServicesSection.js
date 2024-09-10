import React from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      title: "Social Events",
      description: "Create lasting memories with our expertly crafted social gatherings.",
      icon: "🎉" // You can replace this with an actual icon component or image
    },
    {
      title: "Corporate Events",
      description: "Elevate your professional gatherings with our tailored corporate event services.",
      icon: "💼"
    },
    {
      title: "Travel Planning",
      description: "Experience unforgettable journeys with our personalized travel planning.",
      icon: "✈️"
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-description">Crafting Elegant Experiences for Every Occasion</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <Link to="/services" className="view-all-services">
          Explore All Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;