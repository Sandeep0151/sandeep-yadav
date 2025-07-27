"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const techCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "React", icon: "⚛️", expertise: "Expert", years: "6+" },
      { name: "Next.js", icon: "▲", expertise: "Expert", years: "5+" },
      { name: "TypeScript", icon: "📘", expertise: "Advanced", years: "5+" },
      { name: "Vue.js", icon: "💚", expertise: "Advanced", years: "4+" },
      { name: "Tailwind CSS", icon: "🎨", expertise: "Expert", years: "4+" },
      { name: "Three.js", icon: "🎮", expertise: "Intermediate", years: "3+" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Django", icon: "🐍", expertise: "Expert", years: "6+" },
      { name: "Node.js", icon: "🟢", expertise: "Advanced", years: "5+" },
      { name: "FastAPI", icon: "⚡", expertise: "Advanced", years: "4+" },
      { name: "GraphQL", icon: "🔗", expertise: "Advanced", years: "4+" },
      { name: "REST APIs", icon: "🌐", expertise: "Expert", years: "6+" },
      { name: "WebSockets", icon: "🔌", expertise: "Advanced", years: "4+" },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "from-purple-500 to-pink-500",
    technologies: [
      { name: "PostgreSQL", icon: "🐘", expertise: "Expert", years: "6+" },
      { name: "MongoDB", icon: "🍃", expertise: "Advanced", years: "5+" },
      { name: "Redis", icon: "🔴", expertise: "Advanced", years: "4+" },
      { name: "Elasticsearch", icon: "🔍", expertise: "Intermediate", years: "3+" },
      { name: "InfluxDB", icon: "📊", expertise: "Intermediate", years: "2+" },
      { name: "Supabase", icon: "⚡", expertise: "Advanced", years: "3+" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    color: "from-orange-500 to-red-500",
    technologies: [
      { name: "AWS", icon: "☁️", expertise: "Expert", years: "5+" },
      { name: "Docker", icon: "🐳", expertise: "Advanced", years: "4+" },
      { name: "Kubernetes", icon: "⚓", expertise: "Advanced", years: "3+" },
      { name: "Vercel", icon: "▲", expertise: "Expert", years: "4+" },
      { name: "GitHub Actions", icon: "🔄", expertise: "Advanced", years: "4+" },
      { name: "Terraform", icon: "🏗️", expertise: "Intermediate", years: "3+" },
    ],
  },
  {
    category: "AI & Emerging",
    icon: "🤖",
    color: "from-indigo-500 to-purple-500",
    technologies: [
      { name: "OpenAI APIs", icon: "🧠", expertise: "Expert", years: "2+" },
      { name: "Machine Learning", icon: "🤖", expertise: "Advanced", years: "3+" },
      { name: "Web3", icon: "⛓️", expertise: "Advanced", years: "2+" },
      { name: "Blockchain", icon: "🔗", expertise: "Intermediate", years: "2+" },
      { name: "WebAssembly", icon: "⚡", expertise: "Intermediate", years: "2+" },
      { name: "AR/VR", icon: "🥽", expertise: "Beginner", years: "1+" },
    ],
  },
  {
    category: "Tools & Design",
    icon: "🛠️",
    color: "from-yellow-500 to-orange-500",
    technologies: [
      { name: "Git", icon: "📝", expertise: "Expert", years: "8+" },
      { name: "VS Code", icon: "💻", expertise: "Expert", years: "8+" },
      { name: "Figma", icon: "🎨", expertise: "Advanced", years: "4+" },
      { name: "Postman", icon: "📮", expertise: "Expert", years: "5+" },
      { name: "Linear", icon: "📋", expertise: "Advanced", years: "3+" },
      { name: "Notion", icon: "📝", expertise: "Advanced", years: "4+" },
    ],
  },
]

const expertiseColors = {
  Expert: "bg-green-500/20 text-green-400 border-green-500/30",
  Advanced: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Beginner: "bg-gray-500/20 text-gray-400 border-gray-500/30",
}

export function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section id="tech-stack" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
            Tech Stack
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            Technologies & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Mastering cutting-edge technologies to build scalable, performant, and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-500 bg-gray-900/30 border-gray-700/50 hover:border-gray-600/50 backdrop-blur-sm overflow-hidden relative"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{category.category}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group/tech relative"
                      onMouseEnter={() => setHoveredTech(`${category.category}-${tech.name}`)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 rounded-xl p-4 transition-all duration-300 cursor-pointer hover:scale-105">
                        <div className="text-center space-y-2">
                          <div className="text-2xl">{tech.icon}</div>
                          <div className="text-sm font-medium text-white">{tech.name}</div>
                          <Badge
                            variant="outline"
                            className={`text-xs ${expertiseColors[tech.expertise as keyof typeof expertiseColors]}`}
                          >
                            {tech.expertise}
                          </Badge>
                        </div>

                        {/* Hover tooltip */}
                        {hoveredTech === `${category.category}-${tech.name}` && (
                          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-xs text-white whitespace-nowrap z-20">
                            {tech.years} experience
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Technologies Floating Section */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Currently Exploring</h3>
            <p className="text-gray-400">Always learning and staying ahead of the curve</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { name: "Rust", icon: "🦀", color: "from-orange-600 to-red-600" },
              { name: "Go", icon: "🐹", color: "from-blue-600 to-cyan-600" },
              { name: "Flutter", icon: "💙", color: "from-blue-500 to-indigo-500" },
              { name: "Svelte", icon: "🧡", color: "from-orange-500 to-red-500" },
              { name: "Deno", icon: "🦕", color: "from-green-500 to-emerald-500" },
              { name: "Edge Computing", icon: "⚡", color: "from-purple-500 to-pink-500" },
              { name: "Quantum", icon: "⚛️", color: "from-indigo-500 to-purple-500" },
              { name: "WebXR", icon: "🥽", color: "from-pink-500 to-rose-500" },
            ].map((tech, index) => (
              <div key={tech.name} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                <div
                  className={`bg-gradient-to-br ${tech.color} p-4 rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
                >
                  <div className="text-center space-y-2">
                    <div className="text-2xl">{tech.icon}</div>
                    <div className="text-sm font-medium text-white">{tech.name}</div>
                  </div>
                </div>

                {/* Floating animation */}
                <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  25+
                </div>
                <div className="text-gray-400">Technologies Mastered</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  8+
                </div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
