"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  link?: string
  i: number
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -6 }}
      whileTap={{ scale: 0.97 }}
      className="relative w-[320px] min-h-[260px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col justify-between transform-gpu border border-gray-100 dark:border-gray-700"
    >
      <div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{description}</p>
      </div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button className="w-full">View Project</Button>
        </a>
      ) : (
        <Button disabled className="w-full">Details Soon</Button>
      )}
    </motion.div>
  )
}