"use client"

import { useState, useEffect, useRef } from "react"
import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import CountUp from "react-countup"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import Navbar from "@/components/ui/Navbar"
import emailjs from "@emailjs/browser"
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si"


interface ProjectCardProps {
  title: string
  description: string
  link?: string
  i: number
}

function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -6 }}
      whileTap={{ scale: 0.97 }}
      className="relative w-[320px] min-h-[260px] bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between transform-gpu border border-gray-100"
    >
      <div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-700 mb-4 text-sm">{description}</p>
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

// Particle Background Component
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<any[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Create particles
    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`
        });
      }
    };

    initParticles();

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas with a slight fade effect for trails
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current.forEach(particle => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(125deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}
    />
  );
};

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_0241diz",       
    "template_9b7zhki",        
    e.currentTarget,
    "xqQ_JmUyA2Q6690TN"        
  ).then(
    () => alert("Message sent successfully!"),
    (error) => alert("Failed to send message: " + error.text)
  );

  e.currentTarget.reset();
};

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
    <div className="min-h-screen flex flex-col bg-white text-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <ParticleBackground />
      
      {/* Content with semi-transparent overlay */}
      <div className="relative z-10">
        <Navbar aboutInView={aboutInView} greeting={greeting} />
        
        {/* Hero */}
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Hi, I'm <span className="text-green-400">Bharath Mummadi</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
              I build with Static web3, React, and IoT Java full-stack development.
              surfing through internet getting to know new tech and keep growing.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="#projects">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105">
                  View Projects
                </Button>
              </a>
              <a href="/resume-IT.pdf" download>
                <Button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105">
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

        {/* Skills */}
        <section id="skills" className="px-6 md:px-10 py-16 md:py-20 bg-white/80 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
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
                className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm border border-gray-200"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </section>

        {/* Experience / Timeline section */}
        <section id="experience" className="px-6 md:px-10 py-16 md:py-20 bg-gray-50/80 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-10 text-center">Experience & Education</h2>
          <VerticalTimeline>
            {timelineEvents.map((ev, index) => (
              <VerticalTimelineElement
                key={index}
                date={ev.date}
                iconStyle={{ background: "#000", color: "#fff" }}
              >
                <h3 className="text-xl font-semibold">{ev.title}</h3>
                <h4 className="text-md text-gray-600">{ev.subtitle}</h4>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>

        {/* Projects */}
        <section id="projects" className="px-6 md:px-10 py-16 md:py-20 bg-white/80 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
          >
            {projects.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="w-full flex justify-center">
                <ProjectCard i={i} {...p} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Achievements section */}
        <section id="achievements" className="px-6 md:px-10 py-16 md:py-20 bg-gray-50/80 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-10 text-center">Achievements & Workshops</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-40 border border-gray-100"
              >
                <span className="text-4xl font-bold text-blue-600">
                  <CountUp end={ach.value} duration={1.5} />
                </span>
                <span className="mt-2 text-gray-700 text-center">{ach.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Notes / Blog Section */}
        <section id="notes" className="px-6 md:px-10 py-16 md:py-20 bg-white/80 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-10 text-center">What I'm Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-2">Advanced Java</h3>
              <p className="text-gray-600">Starting object-oriented coding, working on small programs.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-2">Dockers & Mini Data Center Setup</h3>
              <p className="text-gray-600">Learning containerization and virtual machines in cloud.</p>
            </div>
          </div>
        </section>
<section id="contact" className="px-6 md:px-10 py-12 md:py-16 bg-black/80 backdrop-blur-md text-white text-center">
          <h2 className="text-3xl font-bold mb-10">Contact Me</h2>
          <p className="mb-6">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

        <motion.form onSubmit={sendEmail} className="flex flex-col gap-4 max-w-lg mx-auto">
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="p-3 rounded-lg border border-gray-300"
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="p-3 rounded-lg border border-gray-300"
  />
  <input
    type="text"
    name="title"
    placeholder="Subject"
    required
    className="p-3 rounded-lg border border-gray-300"
  />
  <textarea
    name="message"
    rows={5}
    placeholder="Your Message"
    required
    className="p-3 rounded-lg border border-gray-300"
  />
  <button
    type="submit"
    className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
  >
    Send Message
  </button>
</motion.form>
</section>

        {/* Footer / Contact */}
<footer className="px-6 md:px-10 py-12 md:py-16 bg-black/80 backdrop-blur-md text-white text-center">
  <div className="max-w-3xl mx-auto">
    <p className="text-lg md:text-xl font-medium leading-relaxed mb-6 text-gray-200">
      I don't believe in shortcuts to success. I'm focused on hard work, adding value, 
      and serving others. My projects and skills reflect this approach, and I'm always 
      learning to grow stronger as a developer.
    </p>
    <p className="text-gray-400 mb-6">
      If you have questions, feel free to email me at{" "}
      <a href="mailto:mummadibharath9966@gmail.com" className="text-blue-400 hover:underline">
        mummadibharath9966@gmail.com
      </a>. I'm excited to connect and help where I can!
    </p>
  </div>

  <div className="flex justify-center gap-6 mt-4 mb-6">
    <a href="https://github.com/Bharath6911" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
      <SiGithub size={20} /> GitHub
    </a>
    <a href="https://www.linkedin.com/in/bharath-mummadi-8a8515270" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
      <SiLinkedin size={20} /> LinkedIn
    </a>
    <a href="https://www.instagram.com/bharat_041214/" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
      <SiInstagram size={20} /> Instagram
    </a>
  </div>

  <p className="mt-6 text-gray-500 text-sm">
    © {new Date().getFullYear()} Bharath Mummadi. All rights reserved.
  </p>
</footer>

      </div>
    </div>
  )
}