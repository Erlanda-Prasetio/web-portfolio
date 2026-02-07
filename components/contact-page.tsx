import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faInstagram, faLinkedinIn, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactPage() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: faWhatsapp,
      href: "https://wa.me/6285156022561",
      color: "bg-green-500 hover:bg-green-600",
      description: "Message me directly",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      href: "https://www.instagram.com/erlandaemv?igsh=MW44ZDRvN3Q1cXNybA%3D%3D&utm_source=qr",
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      description: "Follow my journey",
    },
    {
      name: "LinkedIn",
      icon: faLinkedinIn,
      href: "https://www.linkedin.com/in/erlanda-galant-prasetio-13428620b",
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Professional network",
    },
    {
      name: "TikTok",
      icon: faTiktok,
      href: "https://www.tiktok.com/@erlandaprasetio?_r=1&_t=ZS-93iGk5tPGc5",
      color: "bg-black hover:bg-gray-800",
      description: "Creative content",
    },
  ]

  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          I'd love to hear from you! Whether you want to discuss a project, collaborate, or just say hello, feel free to
          reach out through any of these platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialLinks.map((social) => {
          return (
            <Card key={social.name} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full ${social.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{social.name}</h3>
                    <p className="text-gray-600 text-sm">{social.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      Connect
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
