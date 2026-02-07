"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { GetInTouchModal } from "./get-in-touch-modal"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "@/contexts/theme-context"

interface PortfolioLayoutProps {
  children: React.ReactNode
  currentPage: "home" | "projects" | "contact"
}

const navigation = [
  { name: "Home", href: "/", key: "home" },
  { name: "Projects", href: "/projects", key: "projects" },
  { name: "Contact", href: "/contact", key: "contact" },
]

const profileImages = ["/new-profile.png"]

export function PortfolioLayout({ children, currentPage }: PortfolioLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { theme } = useTheme()
  const router = useRouter()

  const currentIndex = navigation.findIndex((item) => item.key === currentPage)
  const prevPage = navigation[currentIndex === 0 ? navigation.length - 1 : currentIndex - 1]
  const nextPage = navigation[currentIndex === navigation.length - 1 ? 0 : currentIndex + 1]

  const handleNavigation = (direction: "prev" | "next") => {
    const targetPage = direction === "prev" ? prevPage : nextPage
    router.push(targetPage.href)
  }

  const handleImageNavigation = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentImageIndex(currentImageIndex === 0 ? profileImages.length - 1 : currentImageIndex - 1)
    } else {
      setCurrentImageIndex(currentImageIndex === profileImages.length - 1 ? 0 : currentImageIndex + 1)
    }
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handleNavigation("prev")
      if (e.key === "ArrowRight") handleNavigation("next")
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentPage])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen">
        {/* Left Panel - Coral/Orange */}
        <div className="w-2/5 bg-gradient-to-br from-red-400 to-red-500 flex flex-col">
          {/* Logo/Brand */}
          <div className="p-8">
            <h1 className="text-2xl font-bold text-white tracking-wider">DEV.PORTFOLIO</h1>
          </div>

          {/* Profile Image Container */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="relative">
              <div className="w-80 h-80 rounded-lg overflow-hidden shadow-xl ring-2 ring-white/30">
                <img
                  src={profileImages[currentImageIndex] || "/placeholder.svg"}
                  alt="Developer Portrait"
                  className={`w-full h-full object-cover ${
                    currentImageIndex === 0 ? 'object-top' : 'object-center'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="p-8">
          </div>
        </div>

        {/* Right Panel - Light */}
        <div className="w-3/5 bg-gray-50 flex flex-col relative">
          {/* Navigation */}
          <nav className="p-8 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-red-500",
                      currentPage === item.key ? "text-red-500" : "text-gray-600",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-[0_4px_14px_0_rgb(59,130,246,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.6)] border-0 outline-none relative overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                >
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </nav>

          <div className="flex-1 p-8 pt-4 pb-4 overflow-y-auto max-h-[calc(100vh-120px)] scrollbar-hide">
            {children}
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <Button
                onClick={() => handleNavigation("prev")}
                variant="outline"
                size="lg"
                className="flex items-center space-x-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="font-medium">PREV</span>
              </Button>

              <Button
                onClick={() => handleNavigation("next")}
                variant="outline"
                size="lg"
                className="flex items-center space-x-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
              >
                <span className="font-medium">NEXT</span>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <header className="bg-gradient-to-r from-red-400 to-red-500 text-white p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-wider">DEV.PORTFOLIO</h1>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:bg-white/20"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="mt-4 pb-4">
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-medium py-2 px-4 rounded transition-colors",
                      currentPage === item.key ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </header>

        {/* Mobile Content */}
        <main className="p-4 pb-20">{children}</main>

        {/* Mobile Navigation Arrows */}
        <div className="fixed bottom-6 left-4 right-4 z-50">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => handleNavigation("prev")}
              size="lg"
              className={cn(
                "shadow-lg transition-colors",
                theme === "dark" 
                  ? "bg-gray-800 hover:bg-gray-700 text-white border-gray-600" 
                  : "bg-red-500 hover:bg-red-600 text-white"
              )}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              PREV
            </Button>

            <Button
              onClick={() => handleNavigation("next")}
              size="lg"
              className={cn(
                "shadow-lg transition-colors",
                theme === "dark" 
                  ? "bg-gray-800 hover:bg-gray-700 text-white border-gray-600" 
                  : "bg-red-500 hover:bg-red-600 text-white"
              )}
            >
              NEXT
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <GetInTouchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
