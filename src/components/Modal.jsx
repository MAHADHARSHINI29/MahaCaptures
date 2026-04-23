import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Share2, CloudRain } from 'lucide-react';
import '../styles/Modal.css';

const Modal = ({ photo, onClose }) => {
  React.useEffect(() => {
    if (photo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [photo]);

  if (!photo) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-backdrop"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <X size={32} />
          </button>
          
          <div className="modal-content">
            <div className="modal-image-container">
              <img src={photo.imageURL} alt={photo.title} className="modal-image" />
            </div>
            
            <div className="modal-details">
              <div className="details-header">
                <span className="category-tag">{photo.category}</span>
                <h2>{photo.title}</h2>
              </div>
              
              <div className="details-body">
                <p>{photo.description}</p>
                
                <div className="photo-specs">
                  <div className="spec">
                    <CloudRain size={16} />
                    <span>Captured in Nature</span>
                  </div>
                  <div className="spec">
                    <span>Year: 2025</span>
                  </div>
                </div>
              </div>

              <div className="details-footer">
                <button className="footer-btn like">
                  <Heart size={20} />
                  <span>Favorite</span>
                </button>
                <button className="footer-btn share">
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
