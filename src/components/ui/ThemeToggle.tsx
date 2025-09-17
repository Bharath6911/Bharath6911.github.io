"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { useState, useEffect } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder that matches the button structure
    return (
      <div className="relative p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 w-10 h-10 flex items-center justify-center">
        <div className="w-5 h-5" />
      </div>
    )
  }

  return <MountedThemeToggle />
}

function MountedThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 dark:bg-gray-800/50 dark:border-gray-600 dark:hover:bg-gray-700/50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun size={20} className="text-yellow-400" />
        ) : (
          <Moon size={20} className="text-blue-400" />
        )}
      </motion.div>
    </motion.button>
  )
}