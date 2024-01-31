import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contacts from './pages/contacts';
import Header from './components/header';
function App() {
  return (
    <>
    <Header />
    <Routes>
          <Route path="" exact element={<Home/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
    </>
  );
}

export default App;
