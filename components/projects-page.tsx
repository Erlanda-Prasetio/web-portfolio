"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faPython, 
  faJava, 
  faJs, 
  faReact, 
  faCss3Alt,
  faNodeJs,
  faGitAlt
} from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  status: "coming-soon" | "in-progress" | "completed"
  githubUrl?: string
  liveUrl?: string
  details: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Sistem Whistleblower DPMPTSP",
    description: "Solusi pelaporan digital terintegrasi untuk penanganan fraud, korupsi, dan gratifikasi",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    status: "completed",
    liveUrl: "https://wbs-beta-six.vercel.app/",
    details:
      "Platform ini dikembangkan sebagai sistem pelaporan whistleblower resmi untuk DPMPTSP dengan fokus pada keamanan data dan efisiensi proses. Sistem menyediakan mekanisme pelaporan yang aman dan terstruktur untuk tiga kategori utama: fraud, korupsi, dan gratifikasi.\n\nTerintegrasi penuh dengan infrastruktur API DPMPTSP yang ada, memastikan konsistensi data dan workflow yang seamless.\n\nCore Functionality:\n• Multi-category reporting system dengan form validation komprehensif\n• Unique identifier generation untuk tracking dan follow-up laporan\n• Advanced security measures: reCAPTCHA v2 dan API rate limiting\n• Real-time dashboard dengan statistical overview per kategori\n• Automated routing system ke Kepala Dinas untuk review dan tindak lanjut\n• RESTful API integration dengan database PostgreSQL DPMPTSP\n\nStatus: Sistem telah deployed dan operational untuk penggunaan production environment.",
  },
  {
    id: "2",
    title: "RAG-Based AI Chatbot DPMPTSP",
    description: "AI-powered chatbot dengan Retrieval-Augmented Generation untuk layanan informasi publik",
    technologies: ["Python", "Next.js", "FastAPI", "TensorFlow", "Supabase", "OpenRouter"],
    status: "in-progress",
    liveUrl: "https://ptsp-frontend.vercel.app/",
    details:
      "Chatbot AI berbasis RAG (Retrieval-Augmented Generation) yang dikembangkan khusus untuk DPMPTSP menggunakan dataset internal instansi. Sistem ini mengkombinasikan Large Language Model dengan vector embeddings untuk memberikan respons yang akurat dan kontekstual terkait layanan, prosedur, dan regulasi DPMPTSP.\n\nMenggunakan arsitektur modern dengan AI pipeline yang scalable dan responsive frontend interface.\n\nTechnical Implementation:\n• OpenRouter Mistral Small integration untuk LLM response generation\n• TensorFlow dengan CUDA acceleration untuk vector embeddings performance\n• Next.js frontend dengan interactive chat interface dan real-time response\n• FastAPI backend untuk handling LLM requests dan API management\n• Supabase vector database untuk storage dan indexing\n• Python-based RAG pipeline dengan vector similarity search\n\nCore Functionality:\n• RAG pipeline dengan vector similarity search untuk retrieval akurat\n• LLM integration menggunakan OpenRouter Mistral Small untuk response generation\n• CUDA-accelerated vector embeddings dengan TensorFlow untuk performance optimal\n• Vector storage dan indexing menggunakan Supabase vector database\n• RESTful API backend dengan FastAPI untuk handling LLM requests\n• Interactive chat interface dengan real-time response di Next.js frontend\n\nCurrent Status: Beta - Core functionality completed, dataset optimization in progress untuk improve response accuracy.",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "Collaborative project management tool",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    status: "coming-soon",
    details:
      "A comprehensive task management application with real-time collaboration features, drag-and-drop functionality, team workspaces, and advanced reporting. Includes mobile-responsive design and offline capabilities.",
  },
  {
    id: "4",
    title: "AI-Powered Analytics Dashboard",
    description: "Data visualization with machine learning insights",
    technologies: ["Python", "React", "D3.js", "TensorFlow"],
    status: "coming-soon",
    details:
      "An intelligent analytics dashboard that processes large datasets and provides AI-driven insights through interactive visualizations. Features predictive analytics, custom reporting, and real-time data streaming.",
  },
]

const getTechBadgeColors = (tech: string) => {
  const colors: Record<string, string> = {
    "Next.js": "bg-black text-white hover:bg-gray-800",
    "TypeScript": "bg-blue-600 text-white hover:bg-blue-700",
    "JavaScript": "bg-yellow-400 text-black hover:bg-yellow-500",
    "React": "bg-cyan-500 text-white hover:bg-cyan-600",
    "Node.js": "bg-green-600 text-white hover:bg-green-700",
    "Python": "bg-blue-500 text-white hover:bg-blue-600",
    "Tailwind CSS": "bg-teal-500 text-white hover:bg-teal-600",
    "MongoDB": "bg-green-500 text-white hover:bg-green-600",
    "PostgreSQL": "bg-blue-700 text-white hover:bg-blue-800",
    "Supabase": "bg-emerald-600 text-white hover:bg-emerald-700",
    "Socket.io": "bg-gray-800 text-white hover:bg-gray-900",
    "D3.js": "bg-orange-500 text-white hover:bg-orange-600",
    "TensorFlow": "bg-orange-600 text-white hover:bg-orange-700",
    "FastAPI": "bg-teal-600 text-white hover:bg-teal-700",
    "OpenRouter": "bg-purple-600 text-white hover:bg-purple-700",
  }
  return colors[tech] || "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 hover:from-blue-200 hover:to-blue-100"
}

const getTechIcon = (tech: string) => {
  const iconMap: Record<string, any> = {
    "Next.js": faReact, // Using React icon for Next.js
    "TypeScript": faJs, // Using JS icon for TypeScript
    "JavaScript": faJs,
    "React": faReact,
    "Node.js": faNodeJs,
    "Python": faPython,
    "Tailwind CSS": faCss3Alt,
    "MongoDB": faDatabase,
    "PostgreSQL": faDatabase,
    "Supabase": faDatabase,
    "Socket.io": faNodeJs,
    "D3.js": faJs,
    "TensorFlow": faPython,
    "FastAPI": faPython,
    "OpenRouter": faGitAlt,
    "Java": faJava,
  }
  return iconMap[tech] || faGitAlt
}

export function ProjectsPage() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <div className="max-w-5xl">
      <div className="mb-8 opacity-0  animate-[fadeInUp_0.8s_ease-out_0.1s_forwards]">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 opacity-0  animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">Projects</h1>
        <p className="text-xl text-gray-600 opacity-0  animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]">Showcasing my development work</p>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300 ease-out hover:shadow-lg hover:border-orange-300 group opacity-0  relative z-10 hover:z-20"
              style={{ 
                animation: `fadeInUp 0.8s ease-out ${0.7 + index * 0.2}s forwards`
              }}
            >
              <div
                className="p-4 cursor-pointer flex items-center justify-between transition-all duration-500 ease-out"
                onClick={() => toggleProject(project.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-all duration-500 ease-out">{project.title}</h3>
                    <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full group-hover:bg-orange-200 group-hover:scale-105 transition-all duration-400 ease-out">
                      {project.status === "coming-soon" ? "Coming Soon" : project.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                </div>

                <div className="ml-4">
                  {expandedProject === project.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-all duration-500 ease-out transform group-hover:scale-110" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-all duration-500 ease-out transform group-hover:scale-110" />
                  )}
                </div>
              </div>

              {expandedProject === project.id && (
                <div className="overflow-hidden transition-all duration-500 ease-out">
                  <div className="px-4 pb-4 border-t border-gray-100 transform transition-all duration-500 ease-out">
                    <div className="pt-4 space-y-4 opacity-0 translate-y-2 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Project Details</h4>
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">{project.details}</div>
                      </div>

                    <div className="mt-4 mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={tech} 
                            variant="secondary"
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ease-out cursor-default opacity-0 translate-y-4 flex items-center gap-2 ${getTechBadgeColors(tech)}`}
                            style={{ 
                              animation: `fadeInUp 0.3s ease-out ${0.2 + techIndex * 0.05}s forwards`
                            }}
                          >
                            <FontAwesomeIcon icon={getTechIcon(tech)} className="w-4 h-4" />
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {(project.status === "completed" || project.status === "in-progress") && (
                      <div className="flex space-x-3 pt-2 animate-in fade-in slide-in-from-bottom duration-700 delay-700 ease-out">
                        {project.githubUrl && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center space-x-2 bg-transparent border-2 border-gray-300 hover:border-gray-800 hover:bg-gray-800 hover:text-white hover:scale-110 transition-all duration-500 px-6 py-3 rounded-full font-semibold group"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                            <span>💻 Source Code</span>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button 
                            size="sm" 
                            className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-red-300 text-white border-0 px-6 py-3 rounded-full font-semibold relative overflow-hidden group"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                            <span className="relative z-10">
                              {project.id === "2" ? "Live Demo Klik Disini" : "Visit Projects Website"}
                            </span>
                          </Button>
                        )}
                      </div>
                    )}

                    {project.status === "coming-soon" && (
                      <div className="bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50 border-2 border-orange-300 rounded-xl p-4 animate-in fade-in slide-in-from-bottom duration-500 delay-400 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-yellow-100/50 animate-pulse"></div>
                        <div className="relative z-10 flex items-center space-x-3">
                          <div className="text-2xl animate-bounce">🚧</div>
                          <div>
                            <p className="text-sm font-semibold text-orange-800 mb-1">
                              Sedang Dalam Pengembangan
                            </p>
                            <p className="text-xs text-orange-700">
                              Project ini sedang dikerjakan dengan penuh semangat! Stay tuned untuk update terbaru 🔥
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}
