import React, { useEffect, useRef, useState } from "react";
import "./Services.css";

import temp from "../images/temp.jpg";
import heroImage from '../images/3-3.jpg'

const ServiceSection = ({
  title,
  subtitle,
  description,
  image,
  altText,
  lists,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <>
     
      <section
        className={`flex flex-col w-10/12 mx-auto my-16 ${
          isEven ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="flex-1 flex flex-col justify-center p-6 bg-white shadow-md service-content">
          <h2 className="title">{title}</h2>
          <h3 className="subtitle">{subtitle}</h3>
          <p className="description">{description}</p>
          <ul className="list-none text-left">
            {lists.map((item) => (
              <li key={item} className="relative pl-6 text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex-1 bg-cover bg-center rounded-2xl service-image"
          style={{ backgroundImage: `url(${image})` }}
          role="img"
          aria-label={altText}
        />
      </section>
    </>
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
      image: temp,
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
       <div className="relative h-64 bg-cover bg-center contact-image mt-16"
        style={{ backgroundImage: {heroImage} }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-5xl font-bold">Our Services</h1>
          <p className="text-white">Creating Elegant Impressions, One Event at a Time</p>
        </div>
      </div>
      {servicesData.map((service, index) => (
        <ServiceSection key={index} {...service} index={index} />
      ))}
    </div>
  );
};

export default Services;
