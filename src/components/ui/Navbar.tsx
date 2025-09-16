"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar({ aboutInView, greeting }: { aboutInView: boolean, greeting: string }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: "#about", label: "about" },
    { href: "#skills", label: "skills" },
    { href: "#experience", label: "experience" },
    { href: "#achievements", label: "achievements" },
    { href: "#contact", label: "contact" },
  ]

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 bg-black text-white sticky top-0 z-50 shadow-md">
      {/* Greeting / Logo */}
      <div className="ml-2 text-xs sm:text-sm md:text-base text-green-300">
            <i className="fas fa-smile ft text-xl md:text-2xl"> {greeting}, people!</i>
          </div>
      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6 text-sm">
        {links.map(link => (
          <a
  key={link.href}
  href={link.href}
  className="relative group transition-colors"
>
  {link.label}
  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full"></span>
</a>
        ))}
        {!aboutInView && (
          <a
            href="/resume-IT.pdf"
            download
            className="ml-2 px-3 py-1 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 rounded text-white hover:opacity-90 transition"
  >
            Download Resume
          </a>
        )}
      </div>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden p-2 rounded hover:bg-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-14 left-0 right-0 bg-black text-white flex flex-col items-center gap-6 py-6 md:hidden"
          >
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            {!aboutInView && (
              <a
                href="/resume-IT.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
              >
                Download Resume
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
