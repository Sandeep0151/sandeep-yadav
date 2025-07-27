"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, Users, Target, Zap, Star } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Tech Innovation Award 2023",
    description: "Winner at Silicon Valley Tech Summit for AI-powered web applications",
    year: "2023",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Google Developer Expert",
    description: "Recognized as GDE for Web Technologies and Modern JavaScript",
    year: "2022",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Open Source Contributor",
    description: "500+ contributions to major open source projects with 10K+ stars",
    year: "2016-2024",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Target,
    title: "AWS Certified Solutions Architect",
    description: "Professional level certification for cloud architecture and deployment",
    year: "2021",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization Expert",
    description: "Improved application performance by 300%+ across multiple projects",
    year: "2020-2024",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Star,
    title: "Top 1% Developer",
    description: "Ranked in top 1% on Stack Overflow with 50K+ reputation",
    year: "2019",
    color: "from-indigo-500 to-blue-500",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 bg-yellow-500/10 border-yellow-500/30 text-yellow-400">
            Achievements
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
            Recognition & Awards
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognition for technical excellence, innovation, and contribution to the developer community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-gray-900/30 border-gray-700/50 hover:border-gray-600/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${achievement.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                  </div>

                  <Badge variant="outline" className="bg-gray-800/50 border-gray-600/50 text-gray-400">
                    {achievement.year}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
