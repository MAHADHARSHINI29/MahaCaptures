import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhotoCard from './PhotoCard';
import photosData from '../data/photos.json';
import '../styles/Gallery.css';

const Gallery = ({ onPhotoClick }) => {
  const [likedPhotos, setLikedPhotos] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const sections = [
    {
      id: 'nature',
      title: 'My Native Land',
      subtitle: 'Where my soul belongs',
      description: 'The nature in my motherland feels like home to my soul — peaceful, gentle, and grounding. The mountains that surround our home fill my heart with bliss, and the clouds and skies always carry a quiet kind of beauty. The sunsets here — they never fail to paint the sky with calm.',
      photos: photosData.filter(p => p.category === 'nature')
    },
    {
      id: 'skies',
      title: 'Sunsets',
      subtitle: 'Shifting Moods',
      description: 'I fell in love with photography because the sky never stays the same — clouds shift like moods, and every sunset feels like a whispered masterpiece.',
      photos: photosData.filter(p => p.category === 'skies')
    },
    {
      id: 'flowers',
      title: 'The Language of Flowers',
      subtitle: 'Color and Silence',
      description: 'Each flower is a poem made of color, light, and silence. My photos are just translations of that moment.',
      photos: photosData.filter(p => p.category === 'flowers')
    }
  ];

  const handleLike = (id) => {
    const newLikes = likedPhotos.includes(id)
      ? likedPhotos.filter(item => item !== id)
      : [...likedPhotos, id];
    setLikedPhotos(newLikes);
    localStorage.setItem('favorites', JSON.stringify(newLikes));
  };

  return (
    <div className="gallery-section">
      {sections.map((section) => (
        <div key={section.id} className="gallery-group">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">{section.title}</h2>
            <p className="section-subtitle">{section.subtitle}</p>
            <p className="section-desc">{section.description}</p>
          </motion.div>

          <div className="gallery-grid-large">
            <AnimatePresence>
              {section.photos.map(photo => (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  onClick={onPhotoClick}
                  onLike={handleLike}
                  isLiked={likedPhotos.includes(photo.id)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
