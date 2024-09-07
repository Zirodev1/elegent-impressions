import React, { useEffect, useRef, useState } from "react";
import "./Services.css";

import temp from "../images/temp.jpg";

const ServiceSection = ({
  title,
  subtitle,
  description,
  image,
  altText,
  lists,
  index,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className={`service-section ${isVisible ? "animate" : ""} ${isEven ? 'even' : 'odd'}`}
    >
      <div className="service-content">
        <h2 className="title">{title}</h2>
        <h3 className="subtitle">{subtitle}</h3>
        <p className="description">{description}</p>
        <ul>
          {lists.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div
        className="service-image"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={altText}
      />
    </section>
  );
};

const Services = () => {
  const servicesData = [
    {
      title: "Social Events",
      subtitle: "CREATING MEMORABLE MOMENTS",
      description:
        "We understand that every social gathering is a unique opportunity to create lasting memories. Our team specializes in crafting exquisite experiences for a variety of occasions, ensuring that each event reflects the personality and desires of our clients. From intimate gatherings to grand celebrations, we meticulously plan every detail to guarantee a seamless and enjoyable experience for hosts and guests alike.",
      image: temp,
      altText: "Bride sitting in vintage car with flowers",
      lists: [
        "Music Entertainment",
        "Children's parties",
        "Anniversory gatherings",
        "Retirement parties",
        "Date night itineraries",
        "Family reunions",
      ],
    },
    {
      title: "Corporate Events",
      subtitle: "Elevating Professional Gatherings",
      description:
        "In the corporate world, events are more than just gatherings; they're opportunities to strengthen team bonds, impress clients, and showcase your company's values. Our corporate event planning services are designed to align with your organization's goals, creating professional yet engaging experiences. We handle all aspects of planning and execution, allowing you to focus on your business objectives while we ensure a flawless event.",
      image: temp,
      altText: "Bride sitting in vintage car with flowers",
      lists: ["Golf outings", "Galas", "Team building retreats"],
    },
    {
      title: "Travel Planning",
      subtitle: "CURATING UNFORGETTABLE JOURNEYS",
      description:
        "We believe that exceptional travel experiences begin with meticulous planning and insider knowledge. Our travel planning services are dedicated to crafting personalized itineraries that cater to your unique preferences and aspirations. Whether it's a family vacation or a solo adventure, we take care of every detail – from researching the perfect destinations to optimizing your budget – ensuring a seamless and enriching travel experience.",
      image: temp ,
      altText: "Bride sitting in vintage car with flowers",
      lists: [
        "Family vacation research",
        "Cost analysis breakdown",
        "Detailed itinerary planning",
      ],
    },
  ];

  return (
    <div>
      {servicesData.map((service, index) => (
        <ServiceSection key={index} {...service} index={index} />
      ))}
    </div>
  );
};

export default Services;
