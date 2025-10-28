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
import CertificatesModal from "@/components/ui/CertificatesModal"
import ContactForm from "@/components/ui/ContactForm"

export default function Home() {
  const [greeting, setGreeting] = useState("Hello")
  const [showCertificates, setShowCertificates] = useState(false)
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
    description: "Built a prototype streaming platform using HTML, CSS, and JavaScript. Implemented login system with demo credentials (Bharath / 9966). Focused on responsive design, dynamic content rendering, and user-friendly navigation. Learned how to structure large-scale front-end projects and simulate media delivery.",
    link: "https://cinenest.great-site.net",
    image: "/cinenest.png",
  },
  {
    title: "Web based Real-time Chat App",
    description: "Tried creating a real-time chat application with Node.js, Express, and Socket.io. Achieved instant messaging, live user connections, and active session handling. Gained experience in backend event-driven programming and WebSocket communication for scalability.",
    link: "https://share-anything.onrender.com",
    image: "/shareanything.png",
  },
  {
    title: "IoT Data Integration & Automation",
    description: "Used Raspberry Pi to collect sensor data and automate integration with a database. Automated processes reduced manual data entry and improved accuracy. Learned how to handle hardware-software communication and push IoT data into real-time systems for analysis.",
    link: "https://github.com/Bharath6911/data-integration-automation-iot",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop&auto=format",
  },
  {
    title: "Mini Data Center",
    description: "Deployed multiple services inside Azure virtual machines using Docker. Created a controlled mini data center environment for practice in cloud resource management. Achieved container orchestration, networking between services, and cloud deployment of yaml practices.",
    link: "https://github.com/Bharath6911/Mini-Data-Center-",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=200&fit=crop&auto=format",
  },
  {
    title: "CI/CD-Based Two-Tier Web Application Deployment",
    description: "Implemented a CI/CD pipeline using GitHub Actions to automate testing and deployment of a two-tier web application on AWS. Achieved seamless integration between code commits and deployment, reducing manual intervention. Gained hands-on experience with cloud services, infrastructure as code, and automated workflows.",
    link: "https://github.com/Bharath6911/ci-cd-pipeline",
    image: "/projectVMVM.jpg",
  }
]


  const skills = [

    // DevOps & Cloud
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Azure", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "VMware", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vmware/vmware-original.svg" },
    
    // Tools & Others
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
   
    // Backend Technologies
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
     
    // Databases
     { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    
     // Frontend Technologies
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
    { name: "Web3", icon: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" },
  
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
    { label: "Website Design Contest", value: 1, src: "/websitedesigncinenest.jpg", description: "Web development project showcase and design competition recognition" },
    { label: "Logo Design Lab", value: 1, src: "/logolab.jpg", description: "Brand design and professional logo creation certification" },
    { label: "IoT First Prize Award", value: 1, src: "/iotfirstprize.jpg", description: "First place winner in IoT innovation and technology competition" },
    { label: "IoT and PCB Design Internship", value: 1, src: "/iotandpcb.jpg", description: "Internet of Things and PCB design specialization internship" },
    { label: "ICONPHUB Participation", value: 1, src: "/ICONPhub.jpg", description: "Web development and design excellence participation certificate" },
    { label: "Robotic Odyssey Workshop", value: 1, src: "/roboticodessy.jpg", description: "Advanced robotics and automation systems workshop completion" },
    { label: "Outreach Programme", value: 1, src: "/outreachproject.jpg", description: "Community service and social outreach project participation" },
    { label: "School Drawing Competition", value: 1, src: "/schooldrawing.jpg", description: "Artistic excellence and creativity recognition in school competition" }
];

  // Variants
  const fadeUp: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.4, 
        ease: "easeOut"
      } 
    },
  }

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      } 
    },
  }

  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar aboutInView={aboutInView} greeting={greeting} />
        
        <HeroSection aboutRef={aboutRef} />

        {/* Skills */}
        <section id="skills" className="px-6 md:px-10 py-16 md:py-20 bg-gray-100/80 dark:bg-gray-900/50 backdrop-blur-sm transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white transition-colors duration-300">Technologies & Tools I Work With</h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center gap-3 hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-12 h-12"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Experience / Timeline section */}
        <section id="experience" className="px-6 md:px-10 py-16 md:py-20 bg-white dark:bg-transparent transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white transition-colors duration-300">Experience & Education</h2>
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
                className="timeline-element"
                dateClassName="!text-gray-700 dark:!text-gray-300 !font-semibold !text-base"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{ev.title}</h3>
                <h4 className="text-md text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">{ev.subtitle}</h4>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>

        <ProjectsSection projects={projects} />

        {/* Achievements section */}
        <section id="achievements" className="px-6 md:px-10 py-16 md:py-20 bg-gray-100/80 dark:bg-transparent backdrop-blur-sm transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white transition-colors duration-300">Certificates & Achievements</h2>
          
          {/* Summary Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center p-6 bg-white/90 dark:bg-white/10 backdrop-blur-sm rounded-lg shadow-md w-40 border border-gray-200 dark:border-white/20 transition-colors duration-300"
            >
              <span className="text-4xl font-bold text-green-500 dark:text-green-400 transition-colors duration-300">
                <CountUp end={8} duration={1.5} />
              </span>
              <span className="mt-2 text-gray-700 dark:text-gray-200 text-center transition-colors duration-300">Certificates</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center p-6 bg-white/90 dark:bg-white/10 backdrop-blur-sm rounded-lg shadow-md w-40 border border-gray-200 dark:border-white/20 transition-colors duration-300"
            >
              <span className="text-4xl font-bold text-blue-500 dark:text-blue-400 transition-colors duration-300">
                <CountUp end={3} duration={1.5} />
              </span>
              <span className="mt-2 text-gray-700 dark:text-gray-200 text-center transition-colors duration-300">Awards Won</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center p-6 bg-white/90 dark:bg-white/10 backdrop-blur-sm rounded-lg shadow-md w-40 border border-gray-200 dark:border-white/20 transition-colors duration-300"
            >
              <span className="text-4xl font-bold text-purple-500 dark:text-purple-400 transition-colors duration-300">
                <CountUp end={5} duration={1.5} />
              </span>
              <span className="mt-2 text-gray-700 dark:text-gray-200 text-center transition-colors duration-300">Workshops</span>
            </motion.div>
          </div>

          {/* View Certificates Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <button
              onClick={() => setShowCertificates(true)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View All Certificates
            </button>
          </motion.div>
        </section>

        {/* Notes / Blog Section */}
        <section id="notes" className="px-6 md:px-10 py-16 md:py-20 bg-white dark:bg-gray-900/50 backdrop-blur-sm transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white transition-colors duration-300">What I'm Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-100/90 dark:bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-white/20 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">Linux Administration</h3>
             <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Practicing shell commands, permissions, user management, and preparing for the RHCSA exam.</p>
            </div>
            <div className="p-6 bg-gray-100/90 dark:bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-white/20 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">Dockers & Mini Data Center Setup</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Learning containerization and virtual machines in cloud.</p>
            </div>
          </div>
        </section>

        <ContactForm />

        {/* Certificates Modal */}
        <CertificatesModal 
          isOpen={showCertificates}
          onClose={() => setShowCertificates(false)}
          certificates={achievements}
        />

      </div>
    </div>
  )
}