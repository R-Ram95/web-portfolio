import React from 'react';
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import NavbarComponent from './components/navbar/NavbarComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='rohinesh.netlify.app/' element={<Home />} />
          <Route path='rohinesh.netlify.app/projects' element={<Project />} />
          <Route path='rohinesh.netlify.app/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
