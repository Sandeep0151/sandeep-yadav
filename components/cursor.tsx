"use client"

import { useEffect, useState } from "react"

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener("mousemove", updatePosition, { passive: true })
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [mounted])

  if (!mounted || !isVisible) return null

  return (
    <div
      className={`fixed w-8 h-8 rounded-full border-2 border-blue-500 pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ${
        isClicking ? "scale-75" : "scale-100"
      }`}
      style={{
        left: position.x - 16,
        top: position.y - 16,
        transform: `translate(0, 0) scale(${isClicking ? 0.75 : 1})`,
      }}
      aria-hidden="true"
      role="presentation"
    />
  )
}
