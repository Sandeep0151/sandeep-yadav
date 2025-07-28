"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Play, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { HolographicCard } from "@/components/holographic-card"
import { AnimatedBackground } from "@/components/animated-background"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    // Simulate loading time to prevent layout shift
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted || isLoading) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Skeleton for hero content */}
              <div className="animate-pulse">
                <div className="h-6 bg-gray-700 rounded w-48 mb-6"></div>
                <div className="space-y-4">
                  <div className="h-16 bg-gray-700 rounded w-full"></div>
                  <div className="h-12 bg-gray-700 rounded w-3/4"></div>
                </div>
                <div className="h-24 bg-gray-700 rounded w-full mt-6"></div>
                <div className="flex space-x-4 mt-8">
                  <div className="h-12 bg-gray-700 rounded w-32"></div>
                  <div className="h-12 bg-gray-700 rounded w-32"></div>
                </div>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <div className="animate-pulse">
                <div className="h-96 bg-gray-700 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-10"
      role="banner"
      aria-label="Hero section"
    >
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            

            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block">Hey, I'm</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                     Sandeep Yadav
                  </span>
                </h1>

                <div
                  className="text-xl sm:text-xl lg:text-2xl text-gray-300 font-light h-10"
                  role="heading"
                  aria-level={2}
                >
                  <TypewriterEffect
                    words={[
                      "Full Stack Developer",
                      "AI Integration Specialist",
                      "Web3 Architect",
                      "Performance Optimizer",
                      "Django & Next.js Expert",
                      "Python Developer",
                      "FastAPI Innovator",
                      "Prompt Engineering Specialist",
                    ]}
                  />
                </div>
              </div>

              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                I help startups and companies build intelligent, scalable, and future-proof web solutions by combining Full Stack expertise with cutting-edge AI and Web3 technologies.
              </p>
              <p>💡 From idea to execution, I specialize in:</p>
              <ul>
                <li>– AI-powered Applications</li>
                <li>– High-performance Web Systems </li>
                <li>– Scalable Web3 Architecture</li>
                <li>– Speed & Performance Optimization</li>
              </ul>
              <p>Let's build something extraordinary together.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                aria-label="View my work and projects"
              >
                <Play className="mr-2 h-5 w-5" aria-hidden="true" />
                View My Work
                <ArrowRight
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-gray-600 hover:border-gray-400 bg-transparent hover:bg-white/5"
                onClick={() => window.open("/resume.pdf", "_blank")}
                aria-label="Download resume PDF"
              >
                <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                Download Resume
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-3">
                <div className="relative" role="status" aria-label="Available for work">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-gray-300">Open to opportunities</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <span role="img" aria-label="Location">
                  📍
                </span>
                <span>Ahmedabad, IN (Remote)</span>
              </div>
            </div>

            <div className="pt-8">
              <div className="grid grid-cols-3 gap-6 text-center" role="region" aria-label="Professional statistics">
                <div>
                  <div className="text-3xl font-bold text-blue-400">4+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-cyan-400">15+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <HolographicCard />
          </div>
        </div>
      </div>
    </section>
  )
}
