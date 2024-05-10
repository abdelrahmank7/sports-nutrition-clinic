// About.js

import React from 'react';
import './About.css';

const About = () => {
  const iframeSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.197660706286!2d29.944580775162713!3d31.21525277435512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4942653f30d%3A0xbfeebc347e080322!2sSmouha%20Club%20Olympic%20Swimming%20Pool!5e0!3m2!1sen!2seg!4v1712184815581!5m2!1sen!2seg';

  return (
    <main>
      <h1>About Us</h1>
      <p>We are a team of certified nutritionists dedicated to helping you achieve your health goals.</p>
      <div className="map-container" id="contact">
        <iframe
          src={iframeSrc}
          title="Location Map"
          width={1200}
          height={400}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  );
};

export default About;