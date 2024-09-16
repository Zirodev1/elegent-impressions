import React, { useState } from "react";

import "./Portfolio.css";

const Portfolio = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = {
    event1: [
      require("../images/portfolio/americanheart/1.jpg"),
      require("../images/portfolio/americanheart/2.jpg"),
      require("../images/portfolio/americanheart/3.jpg"),
      require("../images/portfolio/americanheart/4.jpg"),
      require("../images/portfolio/americanheart/5.jpg"),
      require("../images/portfolio/americanheart/6.jpg"),
    ],
    event2: [
      // require('../images/portfolio/engagment/1.jpg'),
      require("../images/portfolio/engagment/2.jpg"),
      require("../images/portfolio/engagment/3.jpg"),
      require("../images/portfolio/engagment/4.jpg"),
    ],
    event3: [
      require("../images/portfolio/graduation/1.jpg"),
      require("../images/portfolio/graduation/2.jpg"),
      require("../images/portfolio/graduation/3.jpg"),
      require("../images/portfolio/graduation/4.jpg"),
      require("../images/portfolio/graduation/5.jpg"),
    ],
    event4: [
      require("../images/portfolio/hawaiienpicnic/1.jpg"),
      require("../images/portfolio/hawaiienpicnic/2.jpg"),
      require("../images/portfolio/hawaiienpicnic/3.jpg"),
      require("../images/portfolio/hawaiienpicnic/4.jpg"),
    ],
    event5: [
      require("../images/portfolio/icecream/1.jpg"),
      require("../images/portfolio/icecream/2.jpg"),
      require("../images/portfolio/icecream/3.jpg"),
      require("../images/portfolio/icecream/4.jpg"),
      require("../images/portfolio/icecream/5.jpg"),
      require("../images/portfolio/icecream/6.jpg"),
    ],
    event6: [
      require("../images/portfolio/pieday/1.jpg"),
      require("../images/portfolio/pieday/2.jpg"),
      require("../images/portfolio/pieday/3.jpg"),
      require("../images/portfolio/pieday/4.jpg"),
    ],
    event7: [
      require("../images/portfolio/popcorn/2.jpg"),
      require("../images/portfolio/popcorn/3.jpg"),
    ],
    event8: [
      require("../images/portfolio/superbowl/1.jpg"),
      require("../images/portfolio/superbowl/2.jpg"),
      require("../images/portfolio/superbowl/3.jpg"),
      require("../images/portfolio/superbowl/4.jpg"),
      require("../images/portfolio/superbowl/5.jpg"),
      require("../images/portfolio/superbowl/6.jpg"),
    ],
    // Add more events as needed
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
    <div className="portfolio-page mt-16">
      <div className="portfolio-hero">
        <h1>Portfolio</h1>
        <p>A Showcase of Our Elegant Events</p>
      </div>
      <div className="container gallery-container">
        <h2>Photo Gallery</h2>
        <hr className="line port-line-hr" />
        <div className="gallery-grid">
          {Object.keys(events).map((eventId, index) => (
            <div className="gallery-item" key={index} onClick={() => openGallery(eventId)}>
              <img src={events[eventId][0]} alt={`Event ${index + 1}`} />
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="modal" onClick={closeGallery}>
            <span className="close">&times;</span>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {selectedEvent && selectedEvent.map((image, index) => (
                <img key={index} src={image} alt={`Event ${index + 1}`} className="modal-image" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
