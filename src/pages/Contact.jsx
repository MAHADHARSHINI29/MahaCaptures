import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate frontend only submission
    setTimeout(() => {
      setStatus('Message sent successfully! (Simulated)');
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-page"
    >
      <section className="contact-header">
        <div className="container">
          <h1>Let's Connect</h1>
          <p>Interested in a print, collaboration, or just want to say hi?</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <Mail />
              <div>
                <h3>Email</h3>
                <p>maha@mahacaptures.com</p>
              </div>
            </div>
            <div className="info-item">
              <Phone />
              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin />
              <div>
                <h3>Location</h3>
                <p>Erode, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message here..." rows="6" required></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={status.includes('Sending')}>
              {status.includes('Sending') ? 'Sending...' : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </button>
            {status && <p className="status-msg">{status}</p>}
          </form>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
