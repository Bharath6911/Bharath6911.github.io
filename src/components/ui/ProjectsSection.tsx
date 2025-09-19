"use client"

import { motion, Variants } from "framer-motion"
import ProjectCard from "./ProjectCard"

interface Project {
  title: string
  description: string
  link?: string
  image?: string
}

interface ProjectsSectionProps {
  projects: Project[]
}

const fadeUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut"
    } 
  },
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.1
    } 
  },
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="px-6 md:px-10 py-16 md:py-20 bg-gray-900/50">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">Projects</h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
      >
        {projects.map((project, i) => (
          <motion.div key={i} variants={fadeUp} className="w-full flex justify-center">
            <ProjectCard i={i} {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}