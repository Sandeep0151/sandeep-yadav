"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, Eye } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable AI Applications with Next.js and OpenAI",
    excerpt:
      "Learn how to integrate AI capabilities into your web applications while maintaining performance and scalability. We'll cover API optimization, caching strategies, and cost management.",
    image: "/placeholder.svg?height=300&width=500",
    date: "Dec 15, 2023",
    readTime: "8 min read",
    views: "12.5K",
    category: "AI/ML",
    featured: true,
  },
  {
    id: 2,
    title: "Web3 Development: From Zero to DeFi in 2024",
    excerpt:
      "Complete guide to building decentralized applications with modern tools. Covers smart contracts, Web3 integration, and security best practices for production deployment.",
    image: "/placeholder.svg?height=300&width=500",
    date: "Nov 28, 2023",
    readTime: "12 min read",
    views: "8.9K",
    category: "Web3",
    featured: true,
  },
  {
    id: 3,
    title: "Microservices Architecture: Lessons from Production",
    excerpt:
      "Real-world insights from building and scaling microservices that handle millions of requests. Learn about service communication, data consistency, and monitoring strategies.",
    image: "/placeholder.svg?height=300&width=500",
    date: "Nov 10, 2023",
    readTime: "10 min read",
    views: "15.2K",
    category: "Architecture",
    featured: false,
  },
  {
    id: 4,
    title: "Performance Optimization: Making React Apps Lightning Fast",
    excerpt:
      "Advanced techniques for optimizing React applications including code splitting, lazy loading, memoization, and bundle analysis. Achieve 90+ Lighthouse scores consistently.",
    image: "/placeholder.svg?height=300&width=500",
    date: "Oct 22, 2023",
    readTime: "15 min read",
    views: "20.1K",
    category: "Performance",
    featured: false,
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 bg-indigo-500/10 border-indigo-500/30 text-indigo-400">
            Latest Insights
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
            Blog & Articles
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing knowledge about modern web development, AI integration, and emerging technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <Card
                key={post.id}
                className="group hover:scale-105 transition-all duration-300 bg-gray-900/30 border-gray-700/50 hover:border-gray-600/50 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-indigo-600 hover:bg-indigo-700">Featured</Badge>
                  <Badge
                    variant="outline"
                    className="absolute top-4 right-4 bg-gray-900/80 border-gray-600/50 text-gray-300"
                  >
                    {post.category}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-indigo-500/10 group-hover:text-indigo-400 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <Card
                key={post.id}
                className="group hover:scale-105 transition-all duration-300 bg-gray-900/30 border-gray-700/50 hover:border-gray-600/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex space-x-4">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={120}
                      height={80}
                      className="w-24 h-16 object-cover rounded flex-shrink-0"
                    />
                    <div className="flex-1 space-y-2">
                      <Badge variant="outline" className="text-xs bg-gray-800/50 border-gray-600/50 text-gray-400">
                        {post.category}
                      </Badge>
                      <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-400 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.views} views</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="bg-gray-800/50 border-gray-600/50 hover:bg-gray-700/50">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
