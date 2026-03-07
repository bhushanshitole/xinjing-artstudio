"use client"

import { useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface LightboxProps {
  images: { src: string; title: string; category: string }[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const image = images[currentIndex]

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [handleKey])

  return (
    <div
      className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in-0 duration-300"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
      >
        <X className="w-8 h-8" />
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 md:left-8 z-10 text-white/50 hover:text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      {/* Next */}
      <button
        className="absolute right-4 md:right-8 z-10 text-white/50 hover:text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext() }}
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Image */}
      <div
        className="relative w-[90vw] h-[80vh] max-w-5xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.title}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Caption */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-white font-serif text-xl mb-1">{image.title}</h3>
        <p className="text-white/50 text-sm">{image.category}</p>
        <p className="text-white/30 text-xs mt-2">{currentIndex + 1} / {images.length}</p>
      </div>
    </div>
  )
}
