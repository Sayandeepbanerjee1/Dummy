import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import ServicesSection from './components/Services.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route exact path ="/" element = {<Home />} />
          <Route path ="/about" element = {<About />} />
          <Route path ="/services" element = {<ServicesSection />} />
          <Route path ="/portfolio" element = {<Portfolio />} />
          <Route path ="/contact" element = {<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;