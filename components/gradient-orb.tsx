"use client"

import { useEffect, useRef } from "react"

// Colors sampled from the actual artworks
const ARTWORK_COLORS = [
  { r: 212, g: 168, b: 83 },  // golden yellow
  { r: 232, g: 116, b: 97 },  // coral
  { r: 107, g: 181, b: 160 }, // sage green
  { r: 167, g: 139, b: 219 }, // lavender
  { r: 90,  g: 164, b: 207 }, // sky blue
  { r: 240, g: 160, b: 110 }, // peach
]

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function GradientOrb() {
  const orb1 = useRef<HTMLDivElement>(null)
  const orb2 = useRef<HTMLDivElement>(null)
  const scrollProgress = useRef(0)

  useEffect(() => {
    let raf: number
    let t = 0

    function onScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress.current = total > 0 ? window.scrollY / total : 0
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    function animate() {
      t += 0.003

      const sp = scrollProgress.current
      // Map scroll to color index (smoothly interpolate between artwork colors)
      const colorPos = sp * (ARTWORK_COLORS.length - 1)
      const idx1 = Math.floor(colorPos)
      const idx2 = Math.min(idx1 + 1, ARTWORK_COLORS.length - 1)
      const blend = colorPos - idx1

      const c1 = ARTWORK_COLORS[idx1]
      const c2 = ARTWORK_COLORS[idx2]
      const r = Math.round(lerp(c1.r, c2.r, blend))
      const g = Math.round(lerp(c1.g, c2.g, blend))
      const b = Math.round(lerp(c1.b, c2.b, blend))

      // Secondary orb uses a different color offset
      const colorPos2 = ((sp + 0.3) % 1) * (ARTWORK_COLORS.length - 1)
      const idx3 = Math.floor(colorPos2)
      const idx4 = Math.min(idx3 + 1, ARTWORK_COLORS.length - 1)
      const blend2 = colorPos2 - idx3
      const c3 = ARTWORK_COLORS[idx3]
      const c4 = ARTWORK_COLORS[idx4]
      const r2 = Math.round(lerp(c3.r, c4.r, blend2))
      const g2 = Math.round(lerp(c3.g, c4.g, blend2))
      const b2 = Math.round(lerp(c3.b, c4.b, blend2))

      if (orb1.current) {
        orb1.current.style.transform = `translate(${Math.sin(t) * 40}px, ${Math.cos(t * 0.7) * 30}px)`
        orb1.current.style.background = `rgb(${r}, ${g}, ${b})`
      }
      if (orb2.current) {
        orb2.current.style.transform = `translate(${Math.cos(t * 0.8) * 50}px, ${Math.sin(t * 0.6) * 40}px)`
        orb2.current.style.background = `rgb(${r2}, ${g2}, ${b2})`
      }

      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
      <div
        ref={orb1}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[150px] transition-[background] duration-1000"
      />
      <div
        ref={orb2}
        className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[130px] transition-[background] duration-1000"
      />
    </div>
  )
}
