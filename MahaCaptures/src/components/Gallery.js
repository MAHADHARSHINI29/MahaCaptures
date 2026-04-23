import { useState } from "react";
import GalleryItem from "./GalleryItem";
import GalleryModal from "./GalleryModal";

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            image={image}
            index={index}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Modal outside of the grid */}
      <GalleryModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export default Gallery;
