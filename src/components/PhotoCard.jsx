import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Maximize2 } from 'lucide-react';
import '../styles/PhotoCard.css';

const PhotoCard = ({ photo, onClick, onLike, isLiked }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02, 
        rotateZ: 0.5,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      className="photo-card"
    >
      <div className="card-inner">
        {!isLoaded && <div className="skeleton photo-skeleton"></div>}
        <img 
          src={photo.imageURL} 
          alt={photo.title}
          onLoad={() => setIsLoaded(true)}
          className={`card-image ${isLoaded ? 'loaded' : ''}`}
          loading="lazy"
        />
        
        <div className="card-overlay">
          <div className="overlay-content">
            <h3>{photo.title}</h3>
            <p>{photo.category}</p>
          </div>
          <div className="overlay-actions">
            <button 
              onClick={(e) => { e.stopPropagation(); onLike(photo.id); }} 
              className={`action-btn like-btn ${isLiked ? 'liked' : ''}`}
            >
              <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
            </button>
            <button 
              onClick={() => onClick(photo)} 
              className="action-btn zoom-btn"
            >
              <Maximize2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PhotoCard;
