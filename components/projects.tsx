"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, Users, TrendingUp } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Enterprise-grade analytics platform with machine learning insights, real-time data processing, and predictive analytics. Built for Fortune 500 companies with 99.9% uptime.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Django", "PostgreSQL", "AI/ML", "AWS", "Docker"],
    githubUrl: "https://github.com/alexrivera/ai-analytics",
    liveUrl: "https://ai-analytics-demo.vercel.app",
    featured: true,
    metrics: { stars: 234, users: "10K+", performance: "99.9%" },
    category: "AI/ML",
  },
  {
    id: 2,
    title: "Web3 DeFi Trading Platform",
    description:
      "Decentralized trading platform with automated market makers, yield farming, and cross-chain swaps. Integrated with multiple blockchain networks and handles $50M+ in daily volume.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Solidity", "Web3.js", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/alexrivera/defi-platform",
    liveUrl: "https://defi-demo.vercel.app",
    featured: true,
    metrics: { stars: 189, users: "5K+", performance: "$50M TVL" },
    category: "Web3",
  },
  {
    id: 3,
    title: "Real-time Collaboration Suite",
    description:
      "Slack-like communication platform with video conferencing, file sharing, and AI-powered meeting summaries. Supports 10K+ concurrent users with WebRTC and WebSocket technology.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Socket.io", "WebRTC", "Redis", "PostgreSQL"],
    githubUrl: "https://github.com/alexrivera/collab-suite",
    liveUrl: "https://collab-demo.vercel.app",
    featured: true,
    metrics: { stars: 156, users: "15K+", performance: "10K concurrent" },
    category: "SaaS",
  },
  {
    id: 4,
    title: "E-commerce Microservices",
    description:
      "Scalable e-commerce platform with microservices architecture, event-driven design, and advanced caching. Handles millions of requests with sub-200ms response times.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Django", "React", "Kubernetes", "Redis", "PostgreSQL"],
    githubUrl: "https://github.com/alexrivera/ecommerce-micro",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: false,
    metrics: { stars: 298, users: "25K+", performance: "<200ms" },
    category: "E-commerce",
  },
  {
    id: 5,
    title: "Healthcare Management System",
    description:
      "HIPAA-compliant healthcare platform with patient records, appointment scheduling, and telemedicine capabilities. Integrated with major EHR systems and serves 100+ hospitals.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Vue.js", "Django", "PostgreSQL", "AWS", "Docker"],
    githubUrl: "https://github.com/alexrivera/healthcare-system",
    liveUrl: "https://healthcare-demo.vercel.app",
    featured: false,
    metrics: { stars: 67, users: "100+ hospitals", performance: "HIPAA compliant" },
    category: "Healthcare",
  },
  {
    id: 6,
    title: "IoT Monitoring Platform",
    description:
      "Industrial IoT platform for monitoring and controlling smart devices. Real-time dashboards, predictive maintenance, and edge computing support for 50K+ connected devices.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "InfluxDB", "MQTT", "Docker"],
    githubUrl: "https://github.com/alexrivera/iot-platform",
    liveUrl: "https://iot-demo.vercel.app",
    featured: false,
    metrics: { stars: 123, users: "50K devices", performance: "Real-time" },
    category: "IoT",
  },
]

const categories = ["All", "AI/ML", "Web3", "SaaS", "E-commerce", "Healthcare", "IoT"]

export function Projects() {
  const [filter, setFilter] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-gray-900/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 bg-green-500/10 border-green-500/30 text-green-400">
            Featured Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
            Portfolio Showcase
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            A selection of my most impactful projects spanning AI, Web3, SaaS, and enterprise solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`${
                filter === category
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-800/50 border-gray-600/50 hover:bg-gray-700/50"
              } transition-all duration-200`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:scale-105 transition-all duration-500 bg-gray-900/30 border-gray-700/50 hover:border-gray-600/50 backdrop-blur-sm overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">Featured</Badge>
                )}

                <div
                  className={`absolute inset-0 flex items-center justify-center space-x-4 transition-all duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs bg-gray-800/50 border-gray-600/50 text-gray-400">
                    {project.category}
                  </Badge>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>{project.metrics.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{project.metrics.users}</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                <div className="flex items-center space-x-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-green-400 font-medium">{project.metrics.performance}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs bg-gray-800/30 border-gray-600/30 text-gray-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="bg-gray-800/50 border-gray-600/50 hover:bg-gray-700/50">
            View All Projects on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
