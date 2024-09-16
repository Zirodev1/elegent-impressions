import React from "react";

import heroImage from '../images/3-3.jpg'
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div
        className="relative h-64 bg-cover bg-center contact-image mt-16"
        style={{ backgroundImage: {heroImage} }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-5xl font-bold">Contact</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-left">Contact Us</h2>
          <hr className="w-24 border-t-4 border-yellow-500 mt-2 mb-8" />
        </div>

        <div className="flex flex-wrap justify-between">
          {/* Contact Info */}
          <div className="w-full text-left md:w-1/2 lg:w-5/12 mb-8">
            <p className="text-lg mb-4">
              Thank you so much for reaching out to us - we are excited to
              connect with you! Tell us about you. If you do not receive a
              response within 24 hours, please contact us directly via email or
              phone.
            </p>
            <p className="mb-2">
              <span className="font-bold">Phone:</span> (877)303-8368
            </p>
            <p className="mb-2">
              <span className="font-bold">Email:</span> email@email.com
            </p>
            <p className="mb-2">
              <span className="font-bold">Address:</span> Raleigh, NC
            </p>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <h3 className="text-2xl font-semibold mb-4">
              We look forward to being in touch!
            </h3>
            <form className="space-y-4">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                placeholder="Full Name"
              />
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                placeholder="Phone"
              />
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                placeholder="Service Type"
              />
              <textarea
                className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Message"
              ></textarea>
              <button
                className="w-full md:w-auto bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
