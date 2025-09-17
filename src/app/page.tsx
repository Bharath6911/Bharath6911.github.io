"use client"

import { useState, useEffect } from "react"
import { motion, Variants } from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import Navbar from "@/components/ui/Navbar"
import ParticleBackground from "@/components/ui/ParticleBackground"
import HeroSection from "@/components/ui/HeroSection"
import ProjectsSection from "@/components/ui/ProjectsSection"
import ContactForm from "@/components/ui/ContactForm"

export default function Home() {
  const [greeting, setGreeting] = useState("Hello")
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.4,
  })
  
  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours()
      if (hour < 12) setGreeting("Good morning")
      else if (hour < 18) setGreeting("Good afternoon")
      else if (hour < 22) setGreeting("Good evening")
      else setGreeting("Good night")
    }
    
    updateGreeting()
    const interval = setInterval(updateGreeting, 60000)
    
    return () => clearInterval(interval)
  }, [])
  
  const projects = [
    {
      title: "CineNest Streaming Website",
      description: "Prototype streaming site built with HTML, CSS, JavaScript. Demo login: Bharath / 9966",
      link: "https://cinenest.great-site.net",
    },
    {
      title: "Web based Real-time Chat App",
      description: "Prototype chat application built with Node.js, Express, and Socket.io.",
      link: "https://share-anything.onrender.com",
    },
    {
      title: "IoT Data Integration & Automation",
      description: "Used Raspberry Pi to automate sensor data collection and database integration.",
    },
    {
      title: "Mini Data Center",
      description: "Using docker inside Azure virtual machines to create a mini data center.",
      link: "https://github.com/Bharath6911/Mini-Data-Center-",
    },
  ]

  const timelineEvents = [
    {
      date: "2025",
      title: "Wipro Training",
      subtitle: "Data Center domain, Maintenance & Support role",
    },
    {
      date: "2024-2025",
      title: "Final year project",
      subtitle: "Data integration and automation,Developed a streaming website using static web3 Won the First prize for both projects on national science-Day 2025",
    },
    {
      date: "2023-2024",
      title: "Internships and workshops",
      subtitle: "IOT by NITK STEP and PANTECH E LEARNING IOT and Machine learning,Robotics odyssey workshop",
    },
    {
      date: "2022-2025",
      title: "B.Sc MECS",
      subtitle: "Maths, Electronics, Computer Science",
    },
    {
      date: "2020-2022",
      title: "Intermediate MPC",
      subtitle: "Maths, Physics, Chemistry",
    },
    {
      date: "2019-2020",
      title: "SSC",
      subtitle: "X",
    },
  ]

  const achievements = [
    { label: "National Science Day Prize", value: 1 },
    { label: "IoT / Robotics Workshops", value: 5 },
  ]

  // Variants
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

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar aboutInView={aboutInView} greeting={greeting} />
        
        <HeroSection aboutRef={aboutRef} />

        {/* Skills */}
        <section id="skills" className="px-6 md:px-10 py-16 md:py-20 bg-gray-900/50">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">Skills</h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              "HTML",
              "CSS", 
              "JavaScript",
              "React (learning)",
              "Java (beginner)",
              "Raspberry Pi",
              "IoT",
              "Networking basics",
              "Linux",
              "AWS",
              "Azure",
              "Administration",
              "Docker",
              "Web3",
            ].map((skill, i) => (
              <motion.span
                key={skill}
                variants={fadeUp}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium shadow-sm border border-white/20 text-white"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </section>

        {/* Experience / Timeline section */}
        <section id="experience" className="px-6 md:px-10 py-16 md:py-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">Experience & Education</h2>
          <VerticalTimeline>
            {timelineEvents.map((ev, index) => (
              <VerticalTimelineElement
                key={index}
                date={ev.date}
                iconStyle={{ 
                  background: "linear-gradient(45deg, #ec4899, #8b5cf6, #eab308)", 
                  color: "#fff",
                  border: "3px solid #fff"
                }}
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "12px",
                  backdropFilter: "blur(10px)"
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(255, 255, 255, 0.1)"
                }}
                dateClassName="text-gray-300 font-semibold"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{ev.title}</h3>
                <h4 className="text-md text-gray-300 leading-relaxed">{ev.subtitle}</h4>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>

        <ProjectsSection projects={projects} />

        {/* Achievements section */}
        <section id="achievements" className="px-6 md:px-10 py-16 md:py-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">Achievements & Workshops</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-md w-40 border border-white/20"
              >
                <span className="text-4xl font-bold text-green-400">
                  <CountUp end={ach.value} duration={1.5} />
                </span>
                <span className="mt-2 text-gray-200 text-center">{ach.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Notes / Blog Section */}
        <section id="notes" className="px-6 md:px-10 py-16 md:py-20 bg-gray-900/50">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">What I'm Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-2 text-white">Advanced Java</h3>
              <p className="text-gray-300">Starting object-oriented coding, working on small programs.</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-2 text-white">Dockers & Mini Data Center Setup</h3>
              <p className="text-gray-300">Learning containerization and virtual machines in cloud.</p>
            </div>
          </div>
        </section>

        <ContactForm />

      </div>
    </div>
  )
}