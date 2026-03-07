"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const mouse = useRef({ x: 0, y: 0 })
  const followerPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Only show on devices with fine pointer (no touch)
    if (!window.matchMedia("(pointer: fine)").matches) return

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px"
        cursorRef.current.style.top = e.clientY + "px"
      }
      if (!visible) setVisible(true)
    }

    const onEnter = () => setHovering(true)
    const onLeave = () => setHovering(false)

    document.addEventListener("mousemove", onMove)

    const targets = document.querySelectorAll("a, button, [data-magnetic]")
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })

    let raf: number
    function animate() {
      followerPos.current.x += (mouse.current.x - followerPos.current.x) * 0.12
      followerPos.current.y += (mouse.current.y - followerPos.current.y) * 0.12
      if (followerRef.current) {
        followerRef.current.style.left = followerPos.current.x + "px"
        followerRef.current.style.top = followerPos.current.y + "px"
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener("mousemove", onMove)
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
      cancelAnimationFrame(raf)
    }
  }, [visible])

  if (!visible) return null

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 z-[10000] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background,opacity] duration-300 ${
          hovering
            ? "w-[60px] h-[60px] bg-primary opacity-20"
            : "w-2 h-2 bg-foreground"
        }`}
      />
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,border-color] duration-400 ${
          hovering
            ? "w-[60px] h-[60px] border border-primary"
            : "w-10 h-10 border border-foreground/15"
        }`}
      />
    </>
  )
}
