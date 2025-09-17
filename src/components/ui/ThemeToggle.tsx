"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(true) // Default to dark

  useEffect(() => {
    setMounted(true)
    
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    } else {
      setIsDark(systemPrefersDark)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Apply theme to document
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    // Save to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark, mounted])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  if (!mounted) {
    // Return a placeholder that matches the button structure
    return (
      <div className="relative p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 w-10 h-10 flex items-center justify-center">
        <div className="w-5 h-5" />
      </div>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-600 dark:hover:bg-gray-700/50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun size={20} className="text-yellow-400" />
        ) : (
          <Moon size={20} className="text-blue-400" />
        )}
      </motion.div>
    </motion.button>
  )
}