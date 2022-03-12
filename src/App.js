import React from 'react';
import Home from './pages/home/Home';
import Project from './pages/Project';
import Education from './pages/Education';
import Contact from './pages/Contact';
import NavbarComponent from './components/navbar/NavbarComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Project />}/>
          <Route path="/education" element={<Education />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
