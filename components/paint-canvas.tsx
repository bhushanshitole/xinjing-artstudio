"use client"

import { useEffect, useRef } from "react"

const PALETTE = [
  "#D4A853", // golden yellow (primary)
  "#E87461", // coral
  "#6BB5A0", // sage green
  "#A78BDB", // lavender
  "#F4C95D", // warm yellow
  "#E4726D", // soft red
  "#5BA4CF", // sky blue
  "#F0A06E", // peach
]

interface Stroke {
  x: number
  y: number
  age: number
  color: string
  size: number
  vx: number
  vy: number
  opacity: number
}

export function PaintCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const strokes = useRef<Stroke[]>([])
  const mouse = useRef({ x: 0, y: 0, px: 0, py: 0, active: false })
  const colorIndex = useRef(0)
  const lastSpawn = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    function resize() {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx!.scale(dpr, dpr)
    }
    resize()
    window.addEventListener("resize", resize)

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current.px = mouse.current.x
      mouse.current.py = mouse.current.y
      mouse.current.x = e.clientX - rect.left
      mouse.current.y = e.clientY - rect.top
      mouse.current.active = true
    }

    const onLeave = () => {
      mouse.current.active = false
    }

    canvas.addEventListener("mousemove", onMove)
    canvas.addEventListener("mouseleave", onLeave)

    let raf: number

    function spawnStrokes(now: number) {
      if (!mouse.current.active) return
      if (now - lastSpawn.current < 30) return
      lastSpawn.current = now

      const { x, y, px, py } = mouse.current
      const dx = x - px
      const dy = y - py
      const speed = Math.sqrt(dx * dx + dy * dy)

      if (speed < 1) return

      // Spawn multiple particles along the stroke
      const count = Math.min(Math.floor(speed / 4) + 1, 5)
      for (let i = 0; i < count; i++) {
        const t = i / count
        const sx = px + dx * t
        const sy = py + dy * t

        // Change color occasionally
        if (Math.random() < 0.08) {
          colorIndex.current = (colorIndex.current + 1) % PALETTE.length
        }

        const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.2
        const v = speed * 0.15 + Math.random() * 1.5

        strokes.current.push({
          x: sx + (Math.random() - 0.5) * 8,
          y: sy + (Math.random() - 0.5) * 8,
          age: 0,
          color: PALETTE[colorIndex.current],
          size: 3 + Math.random() * speed * 0.3,
          vx: Math.cos(angle) * v,
          vy: Math.sin(angle) * v,
          opacity: 0.4 + Math.random() * 0.3,
        })
      }
    }

    function animate(now: number) {
      if (!ctx || !canvas) return

      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      spawnStrokes(now)

      // Update and draw strokes
      for (let i = strokes.current.length - 1; i >= 0; i--) {
        const s = strokes.current[i]
        s.age++
        s.x += s.vx
        s.y += s.vy
        s.vx *= 0.96
        s.vy *= 0.96

        const maxAge = 120
        const life = 1 - s.age / maxAge
        if (life <= 0) {
          strokes.current.splice(i, 1)
          continue
        }

        const fadeIn = Math.min(s.age / 8, 1)
        const alpha = s.opacity * life * fadeIn

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size * (0.5 + life * 0.5), 0, Math.PI * 2)
        ctx.fillStyle = s.color
        ctx.globalAlpha = alpha
        ctx.fill()
      }

      ctx.globalAlpha = 1

      // Cap particles
      if (strokes.current.length > 300) {
        strokes.current.splice(0, strokes.current.length - 300)
      }

      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
      canvas.removeEventListener("mousemove", onMove)
      canvas.removeEventListener("mouseleave", onLeave)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="hidden md:block absolute inset-0 w-full h-full pointer-events-auto z-0"
      style={{ opacity: 0.7 }}
    />
  )
}
