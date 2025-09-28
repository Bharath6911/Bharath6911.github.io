"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroSectionProps {
  aboutRef: (node?: Element | null) => void
}

export default function HeroSection({ aboutRef }: HeroSectionProps) {
  return (
    <section
      id="about" 
      ref={aboutRef}
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 md:py-16 gap-6 md:gap-10"
    >
      {/* Left text content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-500 dark:text-white transition-colors duration-300">
          Hi, I'm <p className="text-green-700 dark:text-green-400 transition-colors duration-300">Bharath Mummadi</p>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 dark:text-gray-200 max-w-2xl mb-6 transition-colors duration-300">
          React, web3, Java, IoT.
          Continuously learning new technologies.
        </p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="#projects">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              View Projects
            </Button>
          </a>
          <a href="/resume-IT.pdf" download>
            <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Download Resume
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Right photo */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <div className="relative">
          {/* Gradient border wrapper */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 p-[4px] animate-spin-slow"></div>
          
          {/* Photo */}
          <Image
            src="/me.jpeg"
            alt="Bharath Mummadi"
            width={256}
            height={256}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
            priority
          />
        </div>
      </motion.div>
    </section>
  )
}
