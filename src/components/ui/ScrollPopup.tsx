"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, User, Download } from "lucide-react"

interface ScrollPopupProps {
  aboutInView: boolean
  greeting: string
}

export default function ScrollPopup({ aboutInView, greeting }: ScrollPopupProps) {
  const [showPopup, setShowPopup] = useState(false)
  const [hasScrolledAway, setHasScrolledAway] = useState(false)

  useEffect(() => {
    // Show popup when user scrolls away from about section for the first time
    if (!aboutInView && !hasScrolledAway) {
      setHasScrolledAway(true)
      setTimeout(() => setShowPopup(true), 500) // Small delay for better UX
    }
  }, [aboutInView, hasScrolledAway])

  const closePopup = () => {
    setShowPopup(false)
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    setShowPopup(false)
  }

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={closePopup}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 w-[90vw] max-w-md transition-colors duration-300"
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <X size={16} className="text-gray-600 dark:text-gray-400" />
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="mb-4">
                <User className="w-12 h-12 mx-auto text-green-500 dark:text-green-400 mb-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {greeting}!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Thanks for exploring my portfolio!
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                Want to learn more about me? Check out my background, download my resume, 
                or feel free to connect!
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={scrollToAbout}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-white font-semibold px-4 py-2.5 rounded-lg hover:opacity-90 transition transform hover:scale-105"
                >
                  <User size={16} />
                  Back to About
                </button>
                
                <a
                  href="#contact"
                  onClick={() => {
                    closePopup()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition transform hover:scale-105"
                >
                  <Download size={16} />
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}