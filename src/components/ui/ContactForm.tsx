"use client"

import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si"

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

export default function ContactForm() {
  return (
    <section id="contact" className="px-6 md:px-10 py-12 md:py-16 bg-gray-100/90 dark:bg-black/80 backdrop-blur-md text-gray-900 dark:text-white text-center transition-colors duration-300">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">Contact Me</h2>
      
      
      
      <p className="mb-6 text-gray-700 dark:text-gray-300 transition-colors duration-300">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

      <motion.form 
        onSubmit={sendEmail} 
        className="flex flex-col gap-4 max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg border-2 border-gray-400 dark:border-gray-300 text-gray-900 dark:text-black bg-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg border-2 border-gray-400 dark:border-gray-300 text-gray-900 dark:text-black bg-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
        />
        <input
          type="text"
          name="title"
          placeholder="Subject"
          required
          className="p-3 rounded-lg border-2 border-gray-400 dark:border-gray-300 text-gray-900 dark:text-black bg-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="p-3 rounded-lg border-2 border-gray-400 dark:border-gray-300 text-gray-900 dark:text-black bg-white focus:border-blue-500 focus:outline-none resize-none transition-colors duration-300"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition transform hover:scale-105"
        >
          Send Message
        </button>
<br/    >
        {/* Personal Slogan */}
      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-lg md:text-xl font-medium leading-relaxed mb-4 text-gray-800 dark:text-gray-200 italic transition-colors duration-300">
          "I don't believe in shortcuts to success. I'm focused on hard work, adding value, 
          and serving others. My projects and skills reflect this approach, and I'm always 
          learning to grow stronger as a developer."
        </p>
      </div>
      </motion.form>
      

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-8">
        <a 
          href="https://github.com/Bharath6911" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <SiGithub size={24} />
        </a>
        <a 
          href="https://www.linkedin.com/in/bharath-mummadi-8a8515270" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <SiLinkedin size={24} />
        </a>
        <a 
          href="https://www.instagram.com/bharat_041214/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <SiInstagram size={24} />
        </a>
      </div>

      <p className="mt-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} Bharath Mummadi. All rights reserved.
      </p>
    </section>
  )
}