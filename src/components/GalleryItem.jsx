// components/GalleryItem.js
import { useState } from "react"
import { motion } from "framer-motion"

const GalleryItem = ({ image, index, onClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setMousePosition({
      x: (x - centerX) / 15,
      y: (y - centerY) / 15,
    })
  }

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{
        y: -20,
        scale: 1.03,
        rotateX: mousePosition.y,
        rotateY: -mousePosition.x,
      }}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
        <div className="relative h-80 overflow-hidden">
          <img
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-400/80 to-pink-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.h3
              className="text-white text-2xl font-light text-center px-4 drop-shadow-lg"
              initial={{ y: 30 }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {image.title}
            </motion.h3>
          </motion.div>
        </div>
        {image.caption && (
          <div className="p-4 text-center">
            <p className="text-gray-300 italic text-sm leading-relaxed whitespace-pre-line">{image.caption}</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default GalleryItem