"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, MessageCircle, Calendar, Zap } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", company: "", project: "", budget: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-900/20 to-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
            Let's Connect
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Whether you need a cutting-edge web application, AI integration, or Web3 solution, I'm here to bring your
            vision to life. Let's discuss your next big project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 text-lg mb-8">
                I'm always excited to work on innovative projects that push the boundaries of technology. Let's create
                something extraordinary together.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-gray-900/30 border-gray-700/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-gray-300">alex.rivera@example.com</div>
                      <div className="text-sm text-gray-400">Response within 24 hours</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/30 border-gray-700/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">WhatsApp</div>
                      <div className="text-gray-300">+1 (555) 987-6543</div>
                      <div className="text-sm text-gray-400">For urgent discussions</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/30 border-gray-700/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Schedule a Call</div>
                      <div className="text-gray-300">30-min strategy session</div>
                      <div className="text-sm text-gray-400">Free consultation available</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/30 border-gray-700/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Location</div>
                      <div className="text-gray-300">San Francisco, CA</div>
                      <div className="text-sm text-gray-400">Available globally (Remote)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold text-white">Quick Response Guarantee</span>
                </div>
                <p className="text-gray-300 text-sm">
                  I typically respond to all inquiries within 24 hours. For urgent projects, expect a response within 4
                  hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900/30 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Start Your Project</CardTitle>
              <p className="text-gray-400">Tell me about your vision and let's make it reality</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="company"
                      placeholder="Company/Organization"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-md text-white"
                    >
                      <option value="">Project Type</option>
                      <option value="web-app">Web Application</option>
                      <option value="ai-integration">AI Integration</option>
                      <option value="web3">Web3/Blockchain</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="saas">SaaS Platform</option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-md text-white"
                  >
                    <option value="">Project Budget (Optional)</option>
                    <option value="5k-15k">$5K - $15K</option>
                    <option value="15k-30k">$15K - $30K</option>
                    <option value="30k-50k">$30K - $50K</option>
                    <option value="50k+">$50K+</option>
                    <option value="discuss">Let's Discuss</option>
                  </select>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project, timeline, and specific requirements..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <p className="text-center text-sm text-gray-400">
                  By submitting this form, you agree to receive communications from me. Your information is secure and
                  will never be shared.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
