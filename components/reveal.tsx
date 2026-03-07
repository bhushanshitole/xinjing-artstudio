"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  type?: "text" | "image"
}

export function Reveal({ children, className = "", delay = 0, type = "text" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add("visible")
            }, delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const baseClass =
    type === "image" ? "reveal-img" : "reveal-text"

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  )
}

export function RevealGroup({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const items = container.querySelectorAll(".reveal-text, .reveal-img")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = [...items]
            const idx = siblings.indexOf(entry.target as Element)
            const staggerDelay = idx >= 0 ? idx * 80 : 0
            setTimeout(() => {
              entry.target.classList.add("visible")
            }, staggerDelay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
