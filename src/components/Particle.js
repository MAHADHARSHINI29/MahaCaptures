// components/Particle.js
import { motion } from "framer-motion"

const Particle = ({ delay }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white/20 rounded-full"
      initial={{
        y: "100vh",
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
        opacity: 0,
      }}
      animate={{
        y: "-100px",
        opacity: [0, 1, 1, 0],
        rotate: 360,
      }}
      transition={{
        duration: Math.random() * 8 + 12,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  )
}

export default Particle