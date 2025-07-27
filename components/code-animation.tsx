"use client"

import { useState, useEffect } from "react"

const codeSnippets = [
  `const developer = {
  name: "John Doe",
  skills: ["Django", "React", "Next.js"],
  passion: "Building amazing apps"
};`,
  `function createAwesomeApp() {
  const tech = ["TypeScript", "Tailwind"];
  return buildWithLove(tech);
}`,
  `class FullStackDev {
  constructor() {
    this.frontend = "React/Next.js";
    this.backend = "Django/Node.js";
    this.database = "PostgreSQL";
  }
}`,
]

export function CodeAnimation() {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const snippet = codeSnippets[currentSnippet]

    if (isTyping && displayedCode.length < snippet.length) {
      timeout = setTimeout(() => {
        setDisplayedCode(snippet.slice(0, displayedCode.length + 1))
      }, 50)
    } else if (isTyping && displayedCode.length === snippet.length) {
      timeout = setTimeout(() => {
        setIsTyping(false)
      }, 2000)
    } else if (!isTyping && displayedCode.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedCode(displayedCode.slice(0, -1))
      }, 30)
    } else if (!isTyping && displayedCode.length === 0) {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
      setIsTyping(true)
    }

    return () => clearTimeout(timeout)
  }, [displayedCode, isTyping, currentSnippet])

  return (
    <div className="relative">
      <div className="bg-card border border-border rounded-lg p-6 shadow-2xl">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <pre className="text-sm font-mono text-muted-foreground">
          <code>{displayedCode}</code>
          <span className="animate-pulse">|</span>
        </pre>
      </div>
    </div>
  )
}
