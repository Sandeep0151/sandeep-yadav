"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Code, Terminal, Cpu, Zap } from "lucide-react"

export function HolographicCard() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const rotateX = (e.clientY - centerY) / 10
    const rotateY = (e.clientX - centerX) / 10

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-md mx-auto perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative transform-gpu transition-transform duration-200 ease-out preserve-3d"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Holographic overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl"></div>

          {/* Content */}
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="text-xs text-gray-400 font-mono">ONLINE</div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Full Stack Development</div>
                  <div className="text-xs text-gray-400">Expert Level</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">AI Integration</div>
                  <div className="text-xs text-gray-400">Advanced</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Web3 Architecture</div>
                  <div className="text-xs text-gray-400">Specialist</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Performance Optimization</div>
                  <div className="text-xs text-gray-400">Master</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="text-xs text-gray-400 text-center font-mono">&gt; Ready to build something amazing_</div>
            </div>
          </div>

          {/* Holographic glint effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-500/30 rounded-full animate-bounce delay-1000"></div>
      </div>
    </div>
  )
}
