"use client"

import { useState, useEffect } from "react"
import { useScroll, useTransform } from "framer-motion"
import LoadingScreen from "./components/LoadingScreen"
import Particle from "./components/Particle"
import HeroSection from "./components/HeroSection"
import NativeLandSection from "./components/NativeLandSection"
import SkyCloudsSection from "./components/SkyCloudsSection"
import FlowersSection from "./components/FlowersSection"
import ImageModal from "./components/ImageModal"
import BackToTop from "./components/BackToTop"
import { images } from "./data/images"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [modalImage, setModalImage] = useState(null)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const openModal = (src, alt) => {
    setModalImage({ src, alt })
  }

  const closeModal = () => {
    setModalImage(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <LoadingScreen isLoading={isLoading} />

      {/* Animated particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: 60 }).map((_, i) => (
          <Particle key={i} delay={i * 0.2} />
        ))}
      </div>

      <HeroSection backgroundY={backgroundY} />
      <NativeLandSection images={images.native} openModal={openModal} />
      <SkyCloudsSection images={images.skies} openModal={openModal} />
      <FlowersSection images={images.flowers} openModal={openModal} />

      <ImageModal
        isOpen={!!modalImage}
        onClose={closeModal}
        imageSrc={modalImage?.src || ""}
        imageAlt={modalImage?.alt || ""}
      />

      <BackToTop />
    </div>
  )
}

export default App