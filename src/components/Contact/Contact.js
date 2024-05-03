// ContactUs.js

import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file (create one if not already done)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Form data submitted:', formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p className='qoute'>If you have any questions or need assistance, feel free to reach out:</p>
      <div className="contact-details">
        <div className="contact-item">
          <h3>Location</h3>
          <p>
            Adresssssss
          </p>
        </div>
        <div className="contact-item">
          <h3>Email</h3>
          <p>
            <a href="mailto:info@nutritionclinic.com">MyEmail@gmail.com</a>
          </p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>
            <a href="tel:+1234567890">01200000000</a>
          </p>
        </div>
      </div>
      <div className="contact-form">
        <h3>Send us a message</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
