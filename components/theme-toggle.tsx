"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { useTheme } from "@/contexts/theme-context"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div 
      className="flex items-center rounded-full p-0.5 transition-all duration-300 h-10 w-20"
      style={{
        backgroundColor: isDark ? '#000000' : '#e5e7eb',
        border: '0',
        outline: '0',
        boxShadow: 'none'
      }}
    >
      {/* Sun Icon */}
      <div
        onClick={() => setTheme("light")}
        className={`px-3 py-2 rounded-full transition-all duration-300 flex-1 h-full flex items-center justify-center cursor-pointer ${
          !isDark 
            ? 'shadow-md' 
            : 'hover:bg-gray-700'
        }`}
        style={{
          background: !isDark 
            ? 'linear-gradient(to right, #fb923c, #ef4444)' 
            : 'transparent',
          border: '0',
          outline: '0'
        }}
      >
        <FontAwesomeIcon 
          icon={faSun} 
          className={`h-4 w-4 transition-all duration-300 ${
            !isDark 
              ? 'text-white' 
              : 'text-gray-400'
          }`}
          style={{
            filter: !isDark 
              ? 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))'
              : 'none'
          }}
        />
      </div>
      
      {/* Moon Icon */}
      <div
        onClick={() => setTheme("dark")}
        className={`px-3 py-2 rounded-full transition-all duration-300 flex-1 h-full flex items-center justify-center cursor-pointer ${
          isDark 
            ? 'shadow-md' 
            : 'hover:bg-gray-300'
        }`}
        style={{
          backgroundColor: isDark ? '#1f2937' : 'transparent',
          border: '0',
          outline: '0'
        }}
      >
        <FontAwesomeIcon 
          icon={faMoon} 
          className={`h-4 w-4 transition-all duration-300 ${
            isDark 
              ? 'text-green-400' 
              : 'text-gray-500'
          }`}
          style={{
            filter: isDark 
              ? 'drop-shadow(0 0 4px #00ff00)'
              : 'none',
              transform: 'translateX(-3px)' 
          }}
        />
      </div>
    </div>
  )
}