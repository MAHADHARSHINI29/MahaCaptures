// components/SectionWrapper.js
import { motion } from "framer-motion"

const SectionWrapper = ({ 
  children, 
  className = "", 
  gradient = "from-slate-900/20 to-slate-800/20",
  ...props 
}) => {
  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto z-20" {...props}>
      <div className={`bg-gradient-to-br ${gradient} rounded-3xl p-8 md:p-16 backdrop-blur-sm border border-white/10 ${className}`}>
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper