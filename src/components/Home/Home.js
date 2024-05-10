import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero-section">
        <h1>Embark on Your Fitness Journey</h1>
        <p>Discover the pinnacle of sports nutrition and wellness.</p>
        <button className="cta-button">Begin Now</button>
      </section>

      <section className="features-section">
        <article className="feature-card">
          <h3>Customized Regimens</h3>
          <p>Dedicated nutrition strategies designed for your unique fitness goals.</p>
        </article>
        <article className="feature-card">
          <h3>Professional Consultations</h3>
          <p>Direct access to certified nutrition experts.</p>
        </article>
        <article className="feature-card">
          <h3>Supportive Community</h3>
          <p>Connect with fellow enthusiasts in our dynamic fitness forum.</p>
        </article>
      </section>

      <section className="testimonials-section">
        <h2>Client Testimonials</h2>
        <blockquote className="testimonial">
          <p>"Turbo Charge revolutionized my training regimen!" - Alex</p>
        </blockquote>
        <blockquote className="testimonial">
          <p>"The bespoke nutrition plan was pivotal for my athletic progress." - Sam</p>
        </blockquote>
      </section>

      <section className="final-cta-section">
        <h2>Are You Ready to Transform?</h2>
        <button className="cta-button">Join Our Community</button>
      </section>
    </main>
  );
};

export default Home;
