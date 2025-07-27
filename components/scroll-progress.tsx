"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const updateProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalHeight) * 100
      setProgress(Math.min(Math.max(currentProgress, 0), 100))
    }

    const throttledUpdate = () => {
      requestAnimationFrame(updateProgress)
    }

    window.addEventListener("scroll", throttledUpdate, { passive: true })
    return () => window.removeEventListener("scroll", throttledUpdate)
  }, [mounted])

  if (!mounted) return null

  return (
    <div
      className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-800"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
