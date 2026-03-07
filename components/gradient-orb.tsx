"use client"

import { useEffect, useRef } from "react"

export function GradientOrb() {
  const orb1 = useRef<HTMLDivElement>(null)
  const orb2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf: number
    let t = 0

    function animate() {
      t += 0.003
      if (orb1.current) {
        orb1.current.style.transform = `translate(${Math.sin(t) * 40}px, ${Math.cos(t * 0.7) * 30}px)`
      }
      if (orb2.current) {
        orb2.current.style.transform = `translate(${Math.cos(t * 0.8) * 50}px, ${Math.sin(t * 0.6) * 40}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        ref={orb1}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: "var(--primary)" }}
      />
      <div
        ref={orb2}
        className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px]"
        style={{ background: "var(--accent, var(--primary))" }}
      />
    </div>
  )
}
