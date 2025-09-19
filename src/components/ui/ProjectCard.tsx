"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  link?: string
  image?: string
  i: number
}

export default function ProjectCard({ title, description, link, image }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -6 }}
      whileTap={{ scale: 0.97 }}
      className="relative w-[320px] min-h-[300px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col transform-gpu border border-gray-100 dark:border-gray-700"
    >
      {image && (
        <div className="h-40 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = "data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100' height='100' fill='%23f3f4f6'/%3e%3ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' alignment-baseline='middle' fill='%236b7280'%3eProject%3c/text%3e%3c/svg%3e";
            }}
          />
        </div>
      )}
      <div className="p-6 flex flex-col justify-between flex-grow">
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
      </div>
    </motion.div>
  )
}