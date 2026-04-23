import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <span className="hero-subtitle">Nature & Flower Photographer</span>
          <h1 className="hero-title">Capturing the <span>Soul</span> of Nature</h1>
          <p className="hero-description">
            Explore the delicate beauty of the world through my lens. 
            A journey through flowers, skies, and the whispers of the wild.
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hero-cta"
          >
            <a href="/gallery">Explore Gallery</a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="scroll-indicator"
      >
        <ChevronDown size={32} />
      </motion.div>

      <div className="hero-bg">
        <div className="overlay"></div>
        <img 
          src="/images/IMG_20250928_181953275_HDR_AE.jpg" 
          alt="Hero Nature" 
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
