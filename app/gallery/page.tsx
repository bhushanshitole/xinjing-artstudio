"use client"

import { useState, useCallback } from "react"
import { Instagram } from "lucide-react"
import Image from "next/image"
import { Reveal, RevealGroup } from "@/components/reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { Lightbox } from "@/components/lightbox"
import { artworks } from "@/lib/data"

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const lightboxImages = artworks.map((a) => ({ src: a.image, title: a.title, category: a.category }))
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(() => setLightboxIndex((i) => (i !== null ? (i - 1 + artworks.length) % artworks.length : null)), [])
  const nextImage = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % artworks.length : null)), [])

  return (
    <>
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <RevealGroup>
            <p className="reveal-text text-sm uppercase tracking-widest text-primary mb-4">Gallery</p>
            <h1 className="reveal-text text-5xl md:text-7xl font-serif mb-6 max-w-3xl">
              Explore Our Young Artists&apos; Work
            </h1>
            <p className="reveal-text text-lg text-muted-foreground max-w-xl">
              A collection of creativity, imagination, and boundless expression from our studio.
            </p>
          </RevealGroup>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, i) => (
              <Reveal key={artwork.id} type="image" delay={i * 100}>
                <div
                  className="group cursor-pointer"
                  data-cursor-text="View"
                  onClick={() => setLightboxIndex(i)}
                >
                  <div className="aspect-square relative overflow-hidden mb-4">
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-cover img-zoom"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-lg">{artwork.title}</h3>
                      <p className="text-sm text-muted-foreground cta-expand">{artwork.category}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">({artwork.year})</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-16">
            <MagneticButton as="a" href="https://www.instagram.com/soulmira_art" target="_blank">
              <span className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-400">
                View More on Instagram
                <Instagram className="w-4 h-4" />
              </span>
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  )
}
