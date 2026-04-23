import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Wind, Leaf } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page"
    >
      <section className="about-hero">
        <div className="container">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            The Story Behind <span>MahaCaptures</span>
          </motion.h1>
        </div>
      </section>

      <section className="about-content">
        <div className="container grid">
          <div className="about-image">
            <img src="/images/IMG_20250503_111722.jpg" alt="Photographer" />
          </div>
          <div className="about-text">
            <h2>Capturing the Unseen</h2>
            <p>
              I believe that nature has a soul, and every flower tells a story. 
              My journey started with a simple fascination for the way light dances 
              on petals at dawn.
            </p>
            <p>
              MahaCaptures is more than just a portfolio; it's a curated collection 
              of moments where time stood still. From the vastness of the mountains 
              to the intricate details of a macro floral shot, I aim to bring 
              the beauty of the outdoors to your screen.
            </p>

            <div className="stats">
              <div className="stat">
                <Camera />
                <span>5+ Years Exp.</span>
              </div>
              <div className="stat">
                <Heart />
                <span>1000+ Captures</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values section">
        <div className="container">
          <h2 className="section-title">My Philosophy</h2>
          <div className="values-grid">
            <div className="value-card">
              <Leaf />
              <h3>Sustainability</h3>
              <p>Respecting nature is the first rule of my photography. I leave no trace behind.</p>
            </div>
            <div className="value-card">
              <Wind />
              <h3>Authenticity</h3>
              <p>Minimal editing to preserve the raw, natural essence of the scene.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
