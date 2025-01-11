import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Skills from './components/Skill';
import HServices from './components/HServices';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<AboutMe />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/skill' element={<Skills />} />
    <Route path='/services' element={<HServices />} />
    <Route path='/portfolio' element={<Portfolio />} />
    </Routes>
    </Router>
  );
}

export default App
