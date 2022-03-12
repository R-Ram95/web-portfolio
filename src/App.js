import React from 'react';
import Home from './pages/Home';
import Project from './pages/Project';
import Education from './pages/Education';
import Contact from './pages/Contact';
import NavbarCustom from './components/navbar/NavbarCustom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavbarCustom />
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
