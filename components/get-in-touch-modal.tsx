"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GetInTouchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function GetInTouchModal({ isOpen, onClose }: GetInTouchModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur effect */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={onClose} />

      {/* Modal content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 transform transition-all">
        {/* Close button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Modal header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h2>
          <p className="text-gray-600">Let's discuss your next project</p>
        </div>

        {/* Placeholder content - empty as requested */}
        <div className="space-y-4">
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 text-sm">Content coming soon...</p>
          </div>

          <div className="flex justify-center pt-4">
            <Button onClick={onClose} className="bg-red-500 hover:bg-red-600 text-white px-8">
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
