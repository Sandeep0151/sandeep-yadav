"use client"

import { Github, Linkedin, MessageCircle, Twitter, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#0a0a0f] border-t border-gray-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SY</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sandeep Yadav
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about building the future with AI, Web3, and cutting-edge
              technologies.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="icon"
                className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50"
                asChild
              >
                <a href="https://github.com/sandeep0151" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50"
                asChild
              >
                <a href="https://www.linkedin.com/in/sandeep-yadav-devloper" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50"
                asChild
              >
                <a href="https://x.com/_sandeepyadav1_" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50"
                asChild
              >
                <a href="https://wa.me/919352622100" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50"
                asChild
              >
                <a href="mailto:sandeepyaduvanshi28@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <div className="space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Tech Stack", href: "#tech-stack" },
                { name: "Projects", href: "#projects" },
              ].map((item) => (
                <a key={item.name} href={item.href} className="block text-gray-400 hover:text-white transition-colors">
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <div className="space-y-3">
              {[
                "Full Stack Development",
                "AI Integration",
                "Web3 Development",
                "Performance Optimization",
                "Technical Consulting",
                "Code Reviews",
              ].map((service) => (
                <div key={service} className="text-gray-400">
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Let's Connect</h3>
            <div className="space-y-4">
              <div>
                <div className="text-white font-medium">Currently Available</div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-400 text-sm">Open for new projects</span>
                </div>
              </div>
              <div>
                <div className="text-white font-medium">Response Time</div>
                <div className="text-gray-400 text-sm mt-1">Within 24 hours</div>
              </div>
              <div>
                <div className="text-white font-medium">Time Zone</div>
                <div className="text-gray-400 text-sm mt-1">(IST) – UTC +5:30</div>
              </div>
            </div>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Available for hire</Badge>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center text-sm">
            © {currentYear} Sandeep Yadav. Crafted with <Heart className="h-4 w-4 mx-2 text-red-500" /> using Next.js
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <Button variant="ghost" size="sm" onClick={scrollToTop} className="text-gray-400 hover:text-white">
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
