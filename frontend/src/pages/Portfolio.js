import React, { useState } from 'react';

import './Portfolio.css'

const Portfolio = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = {
      event1: [
          require('../images/portfolio/americanheart/1.jpg'),
          require('../images/portfolio/americanheart/2.jpg'),
         
          // Add more images as needed
      ],
      event2: [
          require('../images/portfolio/engagment/4.jpg'),
          'event2_image2.jpg',
          'event2_image3.jpg'
          // Add more images as needed
      ],
      event3: [
        require('../images/portfolio/graduation/1.jpg'),
          'event3_image2.jpg',
          'event3_image3.jpg'
          // Add more images as needed
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

  return <>
  <div className="contact-image">
        <div className="contact-text">
          <h1>Portfolio</h1>
        </div>
      </div>
      <div className="container gallery-container">
            <h2>Photo Gallery</h2>
            <hr className="line line-hr-left" />
            <div className="gallery-grid">
                {Object.keys(events).map((eventId, index) => (
                    <div className="gallery-item" key={index} onClick={() => openGallery(eventId)}>
                        <img src={events[eventId][0]} alt={`Event ${index + 1}`} />
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div id="gallery-modal" className="modal">
                    <span className="close" onClick={closeGallery}>&times;</span>
                    <div className="modal-content">
                        {selectedEvent && selectedEvent.map((image, index) => (
                            <img key={index} src={image} alt={`Event Image ${index + 1}`} className="zoom-out" />
                        ))}
                    </div>
                </div>
            )}
        </div>
  </>
}

export default Portfolio;