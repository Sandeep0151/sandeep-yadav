"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechNova Solutions",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Alex is hands down one of the most talented developers I've worked with. His ability to integrate AI into our platform increased user engagement by 400%. His technical vision and leadership skills are exceptional.",
    rating: 5,
    project: "AI Analytics Platform",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "DeFi Innovations",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Alex built our entire Web3 trading platform from scratch. His expertise in blockchain technology and ability to deliver under tight deadlines helped us launch ahead of our competitors and secure $10M in funding.",
    rating: 5,
    project: "DeFi Trading Platform",
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "Chief Medical Officer",
    company: "HealthTech Corp",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The healthcare management system Alex developed has transformed how we handle patient data. The HIPAA-compliant architecture and intuitive interface have improved our efficiency by 300%.",
    rating: 5,
    project: "Healthcare System",
  },
  {
    id: 4,
    name: "James Park",
    role: "VP of Engineering",
    company: "ScaleUp Inc",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Alex's microservices architecture scaled our e-commerce platform to handle millions of requests. His performance optimizations reduced our infrastructure costs by 60% while improving response times.",
    rating: 5,
    project: "E-commerce Platform",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Product Manager",
    company: "CollabTools",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The real-time collaboration suite Alex built supports our entire remote team of 200+ people. The WebRTC integration and AI-powered features have made our meetings more productive than ever.",
    rating: 5,
    project: "Collaboration Suite",
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    role: "Director of Operations",
    company: "Industrial IoT Ltd",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Alex's IoT monitoring platform manages our 50,000+ connected devices flawlessly. The predictive maintenance features have reduced our downtime by 80% and saved millions in operational costs.",
    rating: 5,
    project: "IoT Platform",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-gray-900/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 bg-pink-500/10 border-pink-500/30 text-pink-400">
            Client Testimonials
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by industry leaders and innovative companies worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:scale-105 transition-all duration-300 bg-gray-900/30 border-gray-700/50 hover:border-gray-600/50 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="h-8 w-8 text-pink-400" />
              </div>

              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-300 mb-6 leading-relaxed text-sm">"{testimonial.content}"</blockquote>

                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-gray-600"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>

                <Badge variant="outline" className="mt-4 bg-pink-500/10 border-pink-500/30 text-pink-400 text-xs">
                  {testimonial.project}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-gray-400">Project Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">4.9★</div>
                  <div className="text-gray-400">Average Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
