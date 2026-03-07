"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function ParallaxImage({ src, alt, className = "", priority }: ParallaxImageProps) {
  const ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    function update() {
      const img = ref.current
      if (!img) return
      const rect = img.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const viewCenter = window.innerHeight / 2
      const dist = (center - viewCenter) / window.innerHeight
      img.style.transform = `translateY(${dist * -30}px)`
    }

    window.addEventListener("scroll", update, { passive: true })
    update()
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <Image
      ref={ref}
      src={src}
      alt={alt}
      fill
      className={`object-cover transition-transform duration-1000 will-change-transform ${className}`}
      priority={priority}
      style={{ transform: "translateY(0)" }}
    />
  )
}
