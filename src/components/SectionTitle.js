// components/SectionTitle.js
import { motion } from "framer-motion"

const SectionTitle = ({ children, className = "" }) => {
  return (
    <motion.h2
      className={`text-3xl md:text-5xl font-light text-center mb-8 bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.h2>
  )
}

export default SectionTitle