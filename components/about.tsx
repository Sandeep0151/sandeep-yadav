"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Rocket, Users, Trophy, Brain, Target } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description: "Integrating machine learning and AI to create intelligent applications",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "Rapid Innovation",
    description: "Lightning-fast development with cutting-edge technologies and methodologies",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Leading cross-functional teams to deliver exceptional digital experiences",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Trophy,
    title: "Award Winner",
    description: "Recognized for technical excellence and innovative problem-solving",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Performance Focus",
    description: "Obsessed with creating blazing-fast, scalable applications",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driver",
    description: "Constantly exploring new technologies and pushing boundaries",
    color: "from-indigo-500 to-blue-500",
  },
]

export function About() {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted || isLoading) {
    return (
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-gray-700 rounded w-24 mx-auto"></div>
              <div className="h-12 bg-gray-700 rounded w-96 mx-auto"></div>
              <div className="h-6 bg-gray-700 rounded w-full max-w-4xl mx-auto"></div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-700 rounded w-48"></div>
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-32 bg-gray-700 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="py-32 relative" role="region" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 bg-blue-500/10 border-blue-500/30 text-blue-400">
            About Me
          </Badge>
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent"
          >
            Passionate About Digital Innovation
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            With 8+ years of experience in full-stack development, I specialize in building revolutionary web
            applications that integrate AI, Web3, and cutting-edge technologies to solve complex problems and create
            extraordinary user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Started as a curious developer fascinated by the intersection of technology and human experience. Today,
                I'm a senior full-stack engineer who thrives on building applications that push the boundaries of what's
                possible in web development.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                My expertise spans from creating intuitive user interfaces with React and Next.js to designing robust
                backend systems with Django and Node.js. I'm particularly passionate about integrating AI capabilities
                and Web3 technologies to create the next generation of web applications.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">What Drives Me:</h4>
              <ul className="space-y-3 text-gray-300" role="list">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true"></div>
                  <span>🎓 MS in Computer Science - Stanford University</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" aria-hidden="true"></div>
                  <span>🏆 AWS Certified Solutions Architect</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full" aria-hidden="true"></div>
                  <span>🌟 Google Developer Expert - Web Technologies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                  <span>🚀 50+ Successful Project Deliveries</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" aria-hidden="true"></div>
                  <span>🤝 Active Open Source Contributor</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6" role="list" aria-label="Key highlights and expertise areas">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:scale-105 transition-all duration-300 bg-gray-900/50 border-gray-700/50 hover:border-gray-600/50 backdrop-blur-sm"
                  role="listitem"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-3 group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true"
                      >
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
