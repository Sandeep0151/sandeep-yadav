"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "TechNova Solutions",
    position: "Senior Full Stack Developer & AI Lead",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Leading a team of 8 developers in building next-generation AI-powered web applications. Architected and deployed scalable microservices handling 10M+ requests daily.",
    achievements: [
      "Increased application performance by 300% through advanced optimization techniques",
      "Successfully integrated GPT-4 and custom ML models into production systems",
      "Led migration to Next.js 14 and implemented advanced caching strategies",
      "Mentored 5 junior developers and established best practices for the team",
    ],
    technologies: ["Next.js", "Django", "PostgreSQL", "AWS", "Docker", "AI/ML", "TypeScript"],
  },
  {
    company: "InnovateCorp",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    location: "Austin, TX",
    type: "Full-time",
    description:
      "Developed and maintained multiple high-traffic e-commerce platforms and internal tools. Collaborated with product teams to deliver user-centric solutions.",
    achievements: [
      "Built a multi-tenant SaaS platform serving 50K+ active users",
      "Implemented real-time features using WebSocket and Server-Sent Events",
      "Reduced deployment time by 80% through CI/CD pipeline optimization",
      "Achieved 99.9% uptime across all production applications",
    ],
    technologies: ["React", "Django", "Redis", "PostgreSQL", "AWS", "Docker"],
  },
  {
    company: "StartupX",
    position: "Frontend Developer",
    duration: "2018 - 2020",
    location: "Remote",
    type: "Full-time",
    description:
      "Joined as the 3rd engineering hire and helped scale the platform from MVP to Series A. Built responsive web applications and established frontend architecture.",
    achievements: [
      "Developed the entire frontend architecture from scratch",
      "Implemented progressive web app features increasing user engagement by 40%",
      "Created reusable component library used across 5+ products",
      "Optimized bundle size reducing initial load time by 60%",
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "GraphQL"],
  },
  {
    company: "Digital Agency Co",
    position: "Junior Full Stack Developer",
    duration: "2016 - 2018",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Started my professional journey building custom websites and web applications for various clients. Gained experience across different industries and technologies.",
    achievements: [
      "Delivered 20+ client projects on time and within budget",
      "Learned full-stack development including backend and database design",
      "Collaborated with designers to implement pixel-perfect UI/UX",
      "Received 'Developer of the Year' award in 2017",
    ],
    technologies: ["JavaScript", "PHP", "MySQL", "WordPress", "HTML/CSS"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-gray-900/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 bg-purple-500/10 border-purple-500/30 text-purple-400">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            8+ years of building exceptional digital experiences across startups and enterprise companies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group hover:scale-[1.02] transition-all duration-300 bg-gray-900/30 border-gray-700/50 hover:border-gray-600/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-white mb-2">{exp.position}</CardTitle>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-3 text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="bg-gray-800/50 border-gray-600/50 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
