// components/SectionDescription.js
import { motion } from "framer-motion"

const SectionDescription = ({ children, delay = 0.3 }) => {
  return (
    <motion.div
      className="max-w-4xl mx-auto mb-12 p-8 bg-white/5 rounded-xl border-l-4 border-cyan-400"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
    >
      <p className="text-lg md:text-xl leading-relaxed italic text-center text-gray-200">
        {children}
      </p>
    </motion.div>
  )
}

export default SectionDescription