"use client"

import { useEffect, useRef } from "react"

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function update() {
      if (!barRef.current) return
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? (scrolled / total) * 100 : 0
      barRef.current.style.width = pct + "%"
    }
    window.addEventListener("scroll", update, { passive: true })
    update()
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 h-[2px] bg-primary z-[200]"
      style={{ width: "0%" }}
    />
  )
}
