import React from 'react';
import './Services.css';
import Pic1 from './598a41973769de154282d1475476eee3.png';
import Pic2 from './c15944a1340e369d78f2cada60045fcc.png';
import Pic3 from './preventive-healthcare-cholesterol-exercise-high-density-lipoprotein-png-favpng-m2vQ5042Hs7igaSftsxR6ygFA.jpg';


const SERVICE_DETAILS = {
  nutritionPlans: {
    title: 'Nutrition Plans',
    description: 'Tailored dietary strategies crafted by our expert nutritionists to meet your unique athletic ambitions.'
  },
  supplementGuidance: {
    title: 'Supplement Guidance',
    description: 'Navigate the world of supplements with our evidence-based recommendations to enhance your performance.'
  },
  progressTracking: {
    title: 'Progress Tracking',
    description: 'Monitor and celebrate your milestones with our comprehensive progress tracking system.'
  }
};


const Service = ({ imgSrc, title, description }) => (
  <div className="service">
    <img src={imgSrc} alt={title} className="service-image" />
    <h2 className="service-title">{title}</h2>
    <p className="service-description">{description}</p>
  </div>
);

const Services = () => (
  <div className="servicesPage">
    <h1 className="services-header">Welcome to Turbo Charge Clinic</h1>
    <p className="services-intro">Embark on a journey to peak performance with our personalized nutrition and wellness plans.</p>
    <div className="services-container">
      <Service imgSrc={Pic1} {...SERVICE_DETAILS.nutritionPlans} />
      <Service imgSrc={Pic2} {...SERVICE_DETAILS.supplementGuidance} />
      <Service imgSrc={Pic3} {...SERVICE_DETAILS.progressTracking} />
    </div>
  </div>
);

export default Services;
