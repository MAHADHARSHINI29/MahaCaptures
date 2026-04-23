// components/HeroSection.js
import { motion } from "framer-motion"
import useScrollToSection from "./useScrollToSection"

const HeroSection = ({ backgroundY }) => {
  const scrollToSection = useScrollToSection()

  const handleScrollDown = () => {
    scrollToSection("native-land-section")
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 z-20">
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"
        style={{ y: backgroundY }}
      />

      <motion.h1
        className="text-4xl md:text-7xl font-light tracking-wider mb-8 bg-gradient-to-r from-white via-cyan-300 to-pink-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        MahaCaptures
      </motion.h1>

      <motion.p
        className="max-w-4xl text-lg md:text-xl leading-relaxed mb-6 text-white/85"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        Welcome to a visual journey through the breathtaking beauty of nature. Every image you see here is a piece of
        artistic vision, crafted with love and a deep appreciation for the beauty that surrounds us.
      </motion.p>

      <motion.p
        className="text-xl md:text-2xl italic text-white/70 mb-12 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      >
        {'"My lens listens to the clouds, speaks with the flowers, and remembers the hills that raised me."'}
      </motion.p>

      <motion.button
  className="text-4xl cursor-pointer hover:text-cyan-300 transition-colors duration-300"
  onClick={handleScrollDown}
  initial={{ opacity: 0, y: 0 }}
  animate={{ 
    opacity: 1,
    y: [0, -5, 0]  // subtle up and down motion
  }}
  transition={{
    duration: 1.5,
    delay: 2,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut"
  }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  ↓
</motion.button>

    </section>
  )
}

export default HeroSection