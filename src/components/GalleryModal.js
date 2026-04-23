// components/GalleryModal.js
const GalleryModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <img
        src={image.src}
        alt={image.alt}
        className="max-h-screen max-w-full object-contain"
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold"
      >
        &times;
      </button>
    </div>
  );
};

export default GalleryModal;
