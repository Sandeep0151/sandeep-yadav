"use client"

import { useEffect } from "react"

export function Analytics() {
  useEffect(() => {
    // Only run analytics in production
    if (process.env.NODE_ENV === "production") {
      // Add your analytics code here
      console.log("Analytics loaded")
    }
  }, [])

  return null
}
