"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const [hovering, setHovering] = useState(false)
  const [cursorText, setCursorText] = useState("")
  const [visible, setVisible] = useState(false)
  const mouse = useRef({ x: 0, y: 0 })
  const followerPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px"
        cursorRef.current.style.top = e.clientY + "px"
      }
      if (!visible) setVisible(true)
    }

    const onEnter = (e: Event) => {
      setHovering(true)
      const text = (e.currentTarget as HTMLElement).getAttribute("data-cursor-text")
      if (text) setCursorText(text)
    }
    const onLeave = () => {
      setHovering(false)
      setCursorText("")
    }

    document.addEventListener("mousemove", onMove)

    // Re-bind on DOM changes (for dynamically rendered elements)
    function bindTargets() {
      const targets = document.querySelectorAll("a, button, [data-magnetic], [data-cursor-text]")
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
        el.addEventListener("mouseenter", onEnter)
        el.addEventListener("mouseleave", onLeave)
      })
    }

    bindTargets()
    const observer = new MutationObserver(bindTargets)
    observer.observe(document.body, { childList: true, subtree: true })

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
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [visible])

  if (!visible) return null

  const showText = hovering && cursorText

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 z-[10000] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-[width,height,background,opacity] duration-300 ${
          showText
            ? "w-[80px] h-[80px] bg-primary"
            : hovering
            ? "w-[60px] h-[60px] bg-primary opacity-20"
            : "w-2 h-2 bg-foreground"
        }`}
      >
        {showText && (
          <span
            ref={textRef}
            className="text-primary-foreground text-xs font-medium uppercase tracking-wider"
          >
            {cursorText}
          </span>
        )}
      </div>
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,border-color,opacity] duration-400 ${
          showText
            ? "w-[80px] h-[80px] border border-primary opacity-0"
            : hovering
            ? "w-[60px] h-[60px] border border-primary"
            : "w-10 h-10 border border-foreground/15"
        }`}
      />
    </>
  )
}
