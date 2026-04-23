import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Modal from './components/Modal';
import About from './pages/About';
import Contact from './pages/Contact';
import useScrollToTop from './hooks/useScrollToTop';
import { AnimatePresence } from 'framer-motion';
import './styles/global.css';

function App() {
  useScrollToTop();
  const location = useLocation();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="app">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <main>
              <Hero />
              <Gallery onPhotoClick={setSelectedPhoto} />
            </main>
          } />
          <Route path="/gallery" element={
            <div style={{ paddingTop: '80px' }}>
              <Gallery onPhotoClick={setSelectedPhoto} />
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Modal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />

      <button 
        className="back-to-top" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: 'var(--color-primary)',
          color: 'white',
          padding: '1rem',
          borderRadius: '50%',
          display: 'flex',
          zIndex: 1000,
          boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>

      <footer className="main-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MahaCaptures. All rights reserved.</p>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Flickr</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
