"use client"

import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageLoader } from "@/components/page-loader"
import { Reveal } from "@/components/reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { ParallaxImage } from "@/components/parallax-image"
import { AnimatedCounter } from "@/components/animated-counter"
import { GradientOrb } from "@/components/gradient-orb"
import { PaintCanvas } from "@/components/paint-canvas"
import { artworks } from "@/lib/data"

const featuredArtworks = artworks.slice(0, 3)

export default function Home() {
  return (
    <>
      <PageLoader />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-6 relative">
        <PaintCanvas />
        <GradientOrb />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="line-mask">
                <p className="text-sm uppercase tracking-widest text-primary hero-anim">Art Studio</p>
              </div>
              <div>
                <div className="line-mask">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight hero-anim anim-d1">
                    Soulmira
                  </h1>
                </div>
                <div className="line-mask">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight text-primary hero-anim anim-d2">
                    Art Studio
                  </h1>
                </div>
              </div>
              <div className="line-mask">
                <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed hero-anim anim-d3">
                  Where young imaginations come to life through colors, shapes, and boundless creativity.
                </p>
              </div>
              <div className="line-mask">
                <div className="flex flex-wrap gap-4 hero-anim anim-d4">
                  <MagneticButton as="a" href="/gallery">
                    <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
                      View Gallery
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </MagneticButton>
                  <MagneticButton as="a" href="/contact">
                    <span className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 text-sm uppercase tracking-widest hover:bg-secondary transition-colors">
                      Join Us
                    </span>
                  </MagneticButton>
                </div>
              </div>
              <div className="line-mask">
                <p className="text-sm text-muted-foreground hero-anim anim-d4">(Est. 2020)</p>
              </div>
            </div>

            <Reveal type="image" delay={400}>
              <div className="aspect-[4/5] relative overflow-hidden">
                <ParallaxImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4095-8xnoezBKlS3OmmtTBqxkHrTcBvUwyD.jpeg"
                  alt="Children's artwork from Soulmira Art Studio"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 border border-border">
                <p className="text-4xl font-serif text-primary">
                  <AnimatedCounter target={100} suffix="+" />
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Young Artists</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute right-6 md:right-14 bottom-12 flex flex-col items-center gap-4">
          <div className="scroll-line" />
          <span className="text-[0.65rem] tracking-[0.15em] uppercase text-muted-foreground" style={{ writingMode: "vertical-rl" }}>
            Scroll
          </span>
        </div>
      </section>

      {/* Featured Work — Full-screen showcase */}
      {featuredArtworks.map((artwork, i) => (
        <Link
          key={artwork.id}
          href="/gallery"
          className="min-h-screen flex items-end relative overflow-hidden block"
          data-cursor-text="View"
        >
          {/* Full-bleed background image */}
          <div className="absolute inset-0">
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>

          {/* Content overlay at bottom */}
          <div className="container mx-auto px-6 relative z-10 pb-20 md:pb-24">
            <Reveal delay={100}>
              <div>
                <p className="text-sm uppercase tracking-widest text-primary mb-3">
                  {artwork.category}
                </p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground">
                  {artwork.title}
                </h2>
              </div>
            </Reveal>
          </div>

          {/* Project number */}
          <div className="absolute top-24 right-6 md:right-14 z-10">
            <span className="text-sm text-muted-foreground tracking-widest">
              {String(i + 1).padStart(2, "0")} / {String(featuredArtworks.length).padStart(2, "0")}
            </span>
          </div>
        </Link>
      ))}
    </>
  )
}
