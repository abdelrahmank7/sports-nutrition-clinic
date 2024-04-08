import React from 'react';
import './Services.css';
import Pic1 from './598a41973769de154282d1475476eee3.png';
import Pic2 from './c15944a1340e369d78f2cada60045fcc.png';
import Pic3 from './preventive-healthcare-cholesterol-exercise-high-density-lipoprotein-png-favpng-m2vQ5042Hs7igaSftsxR6ygFA.jpg';
const Services = () => {
    return (
        <div className="servicesPage">
            <h1>Welcome to Turbo Charge Clinic</h1>
            <p>Experience the power of optimal nutrition and unlock your athletic potential.</p>
            <div className="services">
                <div className="service">
                    <img src={Pic1} alt="Service 1"/>
                    <h2>Nutrition Plans</h2>
                    <p>Our expert nutritionists design a diet plan tailored to your athletic goals.</p>
                </div>
                <div className="service">
                    <img src={Pic2} alt="Service 2"/>
                    <h2>Supplement Guidance</h2>
                    <p>We provide guidance on safe and effective supplements to boost your performance.</p>
                </div>
                <div className="service">
                    <img src={Pic3} alt="Service 3"/>
                    <h2>Progress Tracking</h2>
                    <p>Track your progress with regular check-ins and adjustments to your nutrition plan.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
