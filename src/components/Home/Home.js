import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Turbo Charge</h1>
        <p>Your premier destination for sports nutrition advice.</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h3>Personalized Plans</h3>
          <p>Custom nutrition plans tailored to your goals.</p>
        </div>
        <div className="feature-card">
          <h3>Expert Advice</h3>
          <p>Consultations with professional nutritionists.</p>
        </div>
        <div className="feature-card">
          <h3>Community Support</h3>
          <p>Join a community of like-minded individuals.</p>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"Turbo Charge helped me improve my performance significantly!" - Alex</p>
        </div>
        <div className="testimonial">
          <p>"The personalized nutrition plan was a game-changer for my training." - Sam</p>
        </div>
      </section>

      <section className="final-cta-section">
        <h2>Ready to Elevate Your Game?</h2>
        <button className="cta-button">Join Now</button>
      </section>
    </div>
  );
};

export default Home;
