// components/FlowersSection.js
import { motion } from "framer-motion"
import GalleryItem from "./GalleryItem"

const FlowersSection = ({ images, openModal }) => {
  return (
    <section id="flowers-section" className="relative py-20 px-6 max-w-7xl mx-auto z-20">
      <div className="bg-gradient-to-br from-pink-900/20 to-rose-800/20 rounded-3xl p-8 md:p-16 backdrop-blur-sm border border-white/10">
        <motion.h2
          className="text-3xl md:text-5xl font-light text-center mb-8 bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          The Language of Flowers
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto mb-12 p-8 bg-white/5 rounded-xl border-l-4 border-cyan-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl leading-relaxed italic text-center text-gray-200">
            Each flower is a poem made of color, light, and silence. My photos are just translations of that moment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <GalleryItem key={index} image={image} index={index}  />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FlowersSection