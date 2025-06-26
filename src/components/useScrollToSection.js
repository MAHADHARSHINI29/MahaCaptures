// hooks/useScrollToSection.js
import { useCallback } from "react"

const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }, [])

  return scrollToSection
}

export default useScrollToSection