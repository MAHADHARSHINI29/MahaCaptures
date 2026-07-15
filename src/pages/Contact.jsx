import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const { error } = await supabase.from('messages').insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    ]);

    if (error) {
      console.error('Supabase insert error', error);
      setStatus(`Failed to send message: ${error.message}`);
      return;
    }

    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
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
                <p>mahadharu2931@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <Phone />
              <div>
                <h3>Phone</h3>
                <p>+91 8122720771</p>
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
              <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Mahadharshini" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="mahadharu2931@gmail.com" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." rows="6" required></textarea>
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
