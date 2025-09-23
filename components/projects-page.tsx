"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import "devices.css"

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  technologies: string[]
  status: "coming-soon" | "in-progress" | "completed"
  liveUrl?: string
  githubUrl?: string
  details: string
  bgColor: string
  textColor: string
  accentColor: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Whistleblower System",
    subtitle: "DPMPTSP Provinsi Jawa Tengah",
    description: "Solusi pelaporan digital terintegrasi untuk penanganan fraud, korupsi, dan gratifikasi",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    status: "completed",
    liveUrl: "https://wbs-beta-six.vercel.app/",
    githubUrl: "https://github.com/ptstpjateng/wbs",
    details: "Platform ini dikembangkan sebagai sistem pelaporan whistleblower resmi untuk DPMPTSP dengan fokus pada keamanan data dan efisiensi proses. Sistem menyediakan mekanisme pelaporan yang aman dan terstruktur untuk tiga kategori utama: fraud, korupsi, dan gratifikasi.\\n\\nCore Functionality:\\n• Multi-category reporting system dengan form validation komprehensif\\n• Unique identifier generation untuk tracking dan follow-up laporan\\n• Advanced security measures: reCAPTCHA v2 dan API rate limiting\\n• Real-time dashboard dengan statistical overview per kategori",
    bgColor: "bg-white dark:bg-gray-100",
    textColor: "text-[#00786F]",
    accentColor: "text-[#00786F]"
  },
  {
    id: "2", 
    title: "RAG-Based AI Chatbot",
    subtitle: "DPMPTSP Intelligent Assistant",
    description: "Chatbot AI berbasis Retrieval-Augmented Generation untuk informasi layanan publik",
    technologies: ["Python", "LangChain", "OpenAI", "FastAPI", "React"],
    status: "completed",
    liveUrl: "https://ptsp-frontend.vercel.app/",
    githubUrl: "https://github.com/Erlanda-Prasetio/ptsp-chatbot",
    details: "Implementasi teknologi RAG (Retrieval-Augmented Generation) untuk mengembangkan chatbot AI yang dapat memberikan informasi akurat tentang layanan DPMPTSP.\\n\\nCore Technology Stack:\\n• LangChain framework untuk orchestration dan chain management\\n• OpenAI GPT models untuk natural language processing\\n• Vector database dengan embedding-based retrieval system\\n• FastAPI backend dengan real-time WebSocket support",
    bgColor: "bg-white dark:bg-gray-100",
    textColor: "text-black",
    accentColor: "text-gray-700"
  }
]

export function ProjectsPage() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const handleProjectClick = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <div className="space-y-12 pb-12">
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Scroll to discover • Click to explore
        </p>
      </div>

      <div className="space-y-10">
        {projects.map((project, index) => {
          const isExpanded = expandedProject === project.id
          
          return (
            <motion.div
              key={project.id}
              className={`relative ${isExpanded ? 'min-h-[70vh]' : 'h-[70vh]'} rounded-3xl ${project.bgColor} overflow-hidden cursor-pointer group shadow-lg border border-gray-200 dark:border-gray-700`}
              initial={{ opacity: 0, y: index === 0 ? 50 : 100 }}
              animate={{ 
                opacity: 1, 
                y: 0
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: index === 0 ? "spring" : "tween",
                damping: index === 0 ? 20 : undefined
              }}
              whileHover={{ scale: isExpanded ? 1 : 1.02 }}
              onClick={() => handleProjectClick(project.id)}
            >
              <AnimatePresence mode="wait">
                {!isExpanded ? (
                  // Collapsed View
                  <motion.div
                    key="collapsed"
                    className="absolute inset-0 flex flex-col justify-center items-center text-center px-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h2
                      className={`text-6xl md:text-7xl font-black ${project.textColor} mb-4 tracking-tight`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      {project.title}
                    </motion.h2>
                    <motion.p
                      className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-700 max-w-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    >
                      {project.subtitle}
                    </motion.p>
                  </motion.div>
                ) : (
                  // Expanded View
                  <motion.div
                    key="expanded"
                    className="relative p-8 md:p-12 min-h-[70vh]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Close Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-6 right-6 z-10 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedProject(null)
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>

                    {/* Content */}
                    <div className="h-full flex flex-col lg:flex-row gap-8">
                      {/* Left Side - Text Content */}
                      <div className="lg:w-1/2 lg:pr-8">
                        {/* Header */}
                        <div className="mb-8">
                          <h1 className={`text-3xl md:text-5xl font-black ${project.textColor} mb-3 tracking-tight`}>
                            {project.title}
                          </h1>
                          <p className="text-lg md:text-xl font-semibold text-gray-600 dark:text-gray-700 mb-3">
                            {project.subtitle}
                          </p>
                          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-700 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="mb-8">
                          <h3 className={`text-lg md:text-xl font-bold ${project.textColor} mb-4`}>
                            Technologies Used
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-3 py-1 ${project.accentColor} bg-gray-100 dark:bg-gray-200 rounded-full text-xs font-medium`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Detailed Description */}
                        <div className="mb-8">
                          <h3 className={`text-lg md:text-xl font-bold ${project.textColor} mb-4`}>
                            Project Details
                          </h3>
                          <div className="space-y-3">
                            {project.details.split('\\n\\n').map((paragraph, paragraphIndex) => (
                              <div key={paragraphIndex} className="space-y-2">
                                {paragraph.split('\\n').map((line, lineIndex) => (
                                  <p key={lineIndex} className="text-lg md:text-sm text-gray-700 dark:text-gray-600 leading-relaxed">
                                    {line}
                                  </p>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-3">
                          {project.liveUrl && (
                            <Button 
                              asChild 
                              size="sm"
                              className={`${project.textColor.replace('text-', 'bg-')} hover:opacity-90 text-white`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-3 w-3" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              asChild
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-3 w-3" />
                                Source Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* Right Side - Live Website Preview */}
                      {project.liveUrl && (
                        <div className="lg:w-1/2 lg:pl-8">
                          <div className="sticky top-8">
                            {/* <h3 className={`text-lg md:text-xl font-bold ${project.textColor} mb-4`}>
                              Live Preview
                            </h3> */}
                            <div className="flex justify-center">
                              <div className="device device-iphone-14 device-starlight" style={{ transform: 'scale(0.935)', transformOrigin: 'center' }}>
                                <div className="device-frame">
                                  <iframe
                                    src={project.liveUrl}
                                    className="device-screen"
                                    title={`${project.title} Live Preview`}
                                    loading="lazy"
                                    scrolling="no"
                                    style={{ 
                                      width: '100%',
                                      height: '100%',
                                      border: 'none',
                                      //overflow: 'hidden',
                                      paddingTop: '20px', // Account for notch/Dynamic Island
                                      backgroundColor: 'white', // White padding area
                                      boxSizing: 'border-box',
                                      imageRendering: 'crisp-edges',
                                      transform: 'translateZ(0)', // Force hardware acceleration
                                      backfaceVisibility: 'hidden'
                                    }}
                                  />
                                </div>
                               
                                    <div className="device-header"></div>
                                    <div className="device-sensors"></div>
                                    <div className="device-btns"></div>
                                    <div className="device-power"></div>
                              </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-4 text-center">
                              Preview only - Click "Live Demo" to interact
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}