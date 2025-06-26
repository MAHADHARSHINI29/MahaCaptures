// components/SkyCloudsSection.js
import { motion } from "framer-motion"
import GalleryItem from "./GalleryItem"

const SkyCloudsSection = ({ images, openModal }) => {
  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto z-20">
      <div className="bg-gradient-to-br from-blue-900/20 to-indigo-800/20 rounded-3xl p-8 md:p-16 backdrop-blur-sm border border-white/10">
        <motion.h2
          className="text-3xl md:text-5xl font-light text-center mb-8 bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Sky of Clouds
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto mb-12 p-8 bg-white/5 rounded-xl border-l-4 border-cyan-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl leading-relaxed italic text-center text-gray-200">
            I fell in love with photography because the sky never stays the same — clouds shift like moods, and every
            sunset feels like a whispered masterpiece.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-12">
          {images.map((image, index) => (
            <div key={index} className="w-full max-w-4xl">
              <GalleryItem image={image} index={index} onClick={() => openModal(image.src, image.alt)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkyCloudsSection