// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import './LandingPage.css';

// const LandingPage = ({ isAuthenticated, user }) => {
//   if (!isAuthenticated) {
//     return <Navigate to="/SignIn" />;
//   };

//   // Content for authenticated users
//   return (
//     <div className="landing-container">
//       <header className="landing-header">
//         <h1>Hello, {user.name}! Welcome to Your Dashboard</h1>
//         <p>Let's make today a great day!</p>
//       </header>
//       <main className="landing-main">
//         <section className="welcome-section">
//           <p>We're excited to have you here and can't wait to help you reach your goals.</p>
//         </section>
//         <section className="fun-facts-section">
//           <h2>Did You Know?</h2>
//           <ul>
//             <li>Eating a banana can help improve your workout performance.</li>
//             <li>Staying hydrated is key to maintaining energy throughout the day.</li>
//           </ul>
//         </section>
//         <section className="inspiration-quote-section">
//           <blockquote>
//             "The only way to do great work is to love what you do." - Steve Jobs
//           </blockquote>
//         </section>
//       </main>
//       <footer className="landing-footer">
//         <p>Stay connected with us:</p>
//         <div className="social-links">
//           {/* Icons would be placed here */}
//         </div>
//       </footer>
//     </div>

//   );
//   };

//   export default LandingPage;
