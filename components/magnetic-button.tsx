"use client"

import { useRef, type ReactNode } from "react"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  as?: "a" | "button" | "div"
  href?: string
  target?: string
}

export function MagneticButton({
  children,
  className = "",
  as: Tag = "div",
  href,
  target,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = ""
    }
  }

  const props = {
    ref: ref as React.Ref<HTMLElement>,
    className: `${className} transition-transform duration-300`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    "data-magnetic": true,
    ...(href ? { href, target } : {}),
  }

  // @ts-expect-error - dynamic tag
  return <Tag {...props}>{children}</Tag>
}
