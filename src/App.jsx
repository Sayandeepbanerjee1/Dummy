import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import ServicesSection from './components/Services.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path ="./" element = {<Home />} />
          <Route path ="./about" element = {<About />} />
          <Route path ="./services" element = {<ServicesSection/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;