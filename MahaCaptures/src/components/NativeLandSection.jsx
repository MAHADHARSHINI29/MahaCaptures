// components/NativeLandSection.js
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import GalleryItem from "./GalleryItem"

const NativeLandSection = ({ images, openModal }) => {
  return (
    <section id="native-land-section" className="relative py-20 px-6 max-w-7xl mx-auto z-20">
      <div className="bg-gradient-to-br from-green-900/20 to-emerald-800/20 rounded-3xl p-8 md:p-16 backdrop-blur-sm border border-white/10">
        <motion.h2
          className="text-3xl md:text-5xl font-light text-center mb-8 bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          My Native Land - Where my soul belongs
        </motion.h2>

        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg border-l-4 border-cyan-400">
            <MapPin size={20} className="text-cyan-400" />
            <a
              href="https://maps.google.com/?q=Jarathal,Chennampatti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-white transition-colors"
            >
              Jarathal, Chennampatti
            </a>
          </div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto mb-12 p-8 bg-white/5 rounded-xl border-l-4 border-cyan-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-lg md:text-xl leading-relaxed italic text-center text-gray-200">
            The nature in my motherland feels like home to my soul — peaceful, gentle, and grounding. The mountains
            that surround our home fill my heart with bliss, and the clouds and skies always carry a quiet kind of
            beauty. The sunsets here — they never fail to paint the sky with calm.
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

export default NativeLandSection