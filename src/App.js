import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SignInSide from "./components/SignInSide/SignInSide";
import RegisterPage from "./components/RegisterPage/RegisterPage.js";
import ClientHomePage from './components/ClientHomePage/ClientHomePage';
import MyInfo from './components/MyInfo/MyInfo.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path='/SignIn' element={<SignInSide/>}/>
        <Route path='/RegisterPage' element={<RegisterPage/>}/>
        <Route path='/ClientHomePage' element={<ClientHomePage/>}/>
        <Route path='/MyInfo' element={<MyInfo/>}/>

      </Routes>
    </Router>
  );
}

export default App;