"use client"

import { useEffect, useState } from "react"

export function PageLoader() {
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1200)
    const hideTimer = setTimeout(() => setHidden(true), 1800)
    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (hidden) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-600 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <div className="loader-line mx-auto mb-6" />
        <span className="font-serif text-sm tracking-[0.2em] uppercase text-muted-foreground">
          Soulmira
        </span>
      </div>
    </div>
  )
}
