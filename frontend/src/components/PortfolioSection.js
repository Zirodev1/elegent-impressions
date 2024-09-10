import React, { useState } from "react";
import "./PortfolioSection.css";

const PortfolioSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = {
    event1: require("../images/portfolio/americanheart/1.jpg"),
    event2: require("../images/portfolio/engagment/2.jpg"),
    event3: require("../images/portfolio/graduation/1.jpg"),
  };

  const openGallery = (eventId) => {
    setSelectedEvent(events[eventId]);
    setIsModalOpen(true);
  };

  const closeGallery = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <section className="portfolio-section">
      <div className="container">
        <h2>Our Portfolio</h2>
        <p className="section-description">A glimpse into our elegant events</p>
        <div className="portfolio-grid">
          {Object.entries(events).map(([eventId, image], index) => (
            <div className="portfolio-item" key={index} onClick={() => openGallery(eventId)}>
              <img src={image} alt={`Event ${index + 1}`} />
              <div className="portfolio-item-overlay">
                <span>View Event</span>
              </div>
            </div>
          ))}
        </div>
        <a href="/portfolio" className="view-all-button">View All Projects</a>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeGallery}>
          <span className="close">&times;</span>
          <img src={selectedEvent} alt="Selected Event" className="modal-image" />
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;