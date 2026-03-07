"use client"

import { useState, useCallback } from "react"
import { Instagram, Mail, Menu, X, ChevronRight, Palette, Sparkles, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageLoader } from "@/components/page-loader"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { NoiseOverlay } from "@/components/noise-overlay"
import { Reveal, RevealGroup } from "@/components/reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { ParallaxImage } from "@/components/parallax-image"
import { SmoothScroll } from "@/components/smooth-scroll"
import { TiltCard } from "@/components/tilt-card"
import { AnimatedCounter } from "@/components/animated-counter"
import { GradientOrb } from "@/components/gradient-orb"
import { Lightbox } from "@/components/lightbox"

const artworks = [
  {
    id: 1,
    title: "Colorful Trees & Giraffes",
    year: "2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4102-dsprDE0TlYVk5sAnL50ShdQLQRDlHm.jpeg",
    category: "Mixed Media"
  },
  {
    id: 2,
    title: "Kandinsky Circles",
    year: "2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2895-8kXykb05GZJ056tpS10L1DXQ6ih7q9.jpeg",
    category: "Oil Pastels & Crayons"
  },
  {
    id: 3,
    title: "Portraits & Sunflowers",
    year: "2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4095-8xnoezBKlS3OmmtTBqxkHrTcBvUwyD.jpeg",
    category: "Oil Pastels"
  },
  {
    id: 4,
    title: "Spring Creations",
    year: "2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9929-91BIHgJPbin7gCL2PUINJtOFWH2hPE.jpeg",
    category: "Mixed Media"
  },
  {
    id: 5,
    title: "Apple Painting",
    year: "2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4092-cowRR15nsSaO2mBxQZzWnHmO1Tz6nz.jpeg",
    category: "Acrylic Paint"
  },
  {
    id: 6,
    title: "Flower Vase Art",
    year: "2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4093-puSkI0a1F93Uy5Ikol7R9DI1qbDA5c.jpeg",
    category: "Collage & Drawing"
  },
]

const marqueeItems = [
  "Mixed Media", "Oil Pastels", "Acrylic Paint", "Collage",
  "Drawing", "Watercolor", "Creativity", "Imagination",
]

const testimonials = [
  {
    quote: "My daughter's creativity has flourished at Soulmira Art Studio. She looks forward to every class!",
    author: "Sarah M.",
    role: "Parent"
  },
  {
    quote: "The teachers create such a nurturing environment. My son has gained so much confidence in his art.",
    author: "David L.",
    role: "Parent"
  },
  {
    quote: "A wonderful space where children can explore and express themselves freely. Highly recommended!",
    author: "Emily R.",
    role: "Parent"
  }
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const lightboxImages = artworks.map((a) => ({ src: a.image, title: a.title, category: a.category }))
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(() => setLightboxIndex((i) => (i !== null ? (i - 1 + artworks.length) % artworks.length : null)), [])
  const nextImage = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % artworks.length : null)), [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <NoiseOverlay />
      <SmoothScroll />
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif tracking-wide text-primary">
            Soulmira
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="nav-link-anim text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#gallery" className="nav-link-anim text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Gallery
            </Link>
            <Link href="#contact" className="nav-link-anim text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="https://www.instagram.com/soulmira_art" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="mailto:xinjingdesign1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <Link href="#about" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#gallery" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Gallery
              </Link>
              <Link href="#contact" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Link href="https://www.instagram.com/soulmira_art" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="mailto:xinjingdesign1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-6 relative">
        <GradientOrb />
        <div className="container mx-auto">
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
                  <MagneticButton as="a" href="#gallery">
                    <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
                      View Gallery
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </MagneticButton>
                  <MagneticButton as="a" href="#contact">
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

      {/* Marquee */}
      <div className="overflow-hidden py-5 border-t border-b border-border">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-12 flex-shrink-0">
              <span className="font-serif text-xl md:text-2xl text-muted-foreground">{item}</span>
              <span className="text-primary text-sm">&bull;</span>
            </span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealGroup>
              <div>
                <p className="reveal-text text-sm uppercase tracking-widest text-primary mb-4">About</p>
                <h2 className="reveal-text text-4xl md:text-5xl font-serif mb-8 text-balance">
                  Nurturing Creativity, One Brushstroke at a Time
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="reveal-text">
                    Soulmira Art Studio is a creative sanctuary where children discover the joy of artistic expression.
                    Our mission is to nurture young minds through hands-on art experiences that encourage exploration,
                    self-expression, and confidence.
                  </p>
                  <p className="reveal-text">
                    From vibrant paintings to imaginative drawings, our students create artwork that reflects their
                    unique perspectives and boundless creativity. Every class is an adventure in color, texture, and
                    storytelling.
                  </p>
                </div>
              </div>
            </RevealGroup>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Reveal delay={0}>
                  <TiltCard className="bg-card p-6 border border-border">
                    <Palette className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-serif text-xl mb-2">Mixed Media</h3>
                    <p className="text-sm text-muted-foreground">Exploring various art techniques and materials</p>
                  </TiltCard>
                </Reveal>
                <Reveal delay={160}>
                  <TiltCard className="bg-card p-6 border border-border">
                    <Heart className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-serif text-xl mb-2">Nurturing Space</h3>
                    <p className="text-sm text-muted-foreground">A supportive environment for creative growth</p>
                  </TiltCard>
                </Reveal>
              </div>
              <div className="space-y-4 mt-8">
                <Reveal delay={80}>
                  <TiltCard className="bg-card p-6 border border-border">
                    <Sparkles className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-serif text-xl mb-2">Imagination</h3>
                    <p className="text-sm text-muted-foreground">Encouraging unique artistic expression</p>
                  </TiltCard>
                </Reveal>
                <Reveal type="image" delay={240}>
                  <div className="aspect-square relative overflow-hidden">
                    <ParallaxImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4112-I7heuuQdSRHbuvhR8M5jXw3MAQ42KF.jpeg"
                      alt="Road map artwork by young artists"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-card border-t border-border">
        <div className="container mx-auto">
          <RevealGroup className="text-center mb-16">
            <p className="reveal-text text-sm uppercase tracking-widest text-primary mb-4">Gallery Exhibitions</p>
            <h2 className="reveal-text text-4xl md:text-5xl font-serif text-balance">Explore Our Young Artists&apos; Work</h2>
          </RevealGroup>

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

          <Reveal className="text-center mt-12">
            <MagneticButton as="a" href="https://www.instagram.com/soulmira_art" target="_blank">
              <span className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-400">
                View Full Gallery
                <Instagram className="w-4 h-4" />
              </span>
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-card border-t border-border">
        <div className="container mx-auto">
          <RevealGroup className="text-center mb-16">
            <p className="reveal-text text-sm uppercase tracking-widest text-primary mb-4">Testimonials</p>
            <h2 className="reveal-text text-4xl md:text-5xl font-serif text-balance">What Parents Say</h2>
          </RevealGroup>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Reveal key={index} delay={index * 120}>
                <TiltCard className="bg-background p-8 border border-border h-full">
                  <p className="text-lg leading-relaxed mb-6 text-balance">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-serif text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <RevealGroup>
            <div>
              <p className="reveal-text text-sm uppercase tracking-widest text-primary mb-4">Join Us</p>
              <h2 className="reveal-text text-4xl md:text-5xl font-serif mb-8 text-balance">
                Start Your Child&apos;s Creative Journey
              </h2>
              <p className="reveal-text text-muted-foreground leading-relaxed mb-10">
                Ready to nurture your child&apos;s artistic talents? Get in touch to learn about our classes,
                workshops, and creative programs designed for young artists of all skill levels.
              </p>
              <div className="reveal-text flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="https://www.instagram.com/soulmira_art"
                  target="_blank"
                  className="inline-flex items-center gap-3 nav-link-anim text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                  @soulmira_art
                </Link>
                <Link
                  href="mailto:xinjingdesign1@gmail.com"
                  className="inline-flex items-center gap-3 nav-link-anim text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  xinjingdesign1@gmail.com
                </Link>
              </div>
            </div>
          </RevealGroup>
        </div>
      </section>

      {/* Marquee (bottom) */}
      <div className="overflow-hidden py-5 border-t border-b border-border">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-12 flex-shrink-0">
              <span className="font-serif text-xl md:text-2xl text-muted-foreground">{item}</span>
              <span className="text-primary text-sm">&bull;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6">
        <div className="container mx-auto">
          {/* Footer CTA */}
          <Reveal>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between pb-12 mb-10 border-b border-border gap-8">
              <h3 className="text-3xl md:text-4xl font-serif max-w-sm">Let&apos;s create together.</h3>
              <MagneticButton as="a" href="#contact">
                <span className="inline-block px-8 py-4 border border-border/30 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-400">
                  Get in Touch
                </span>
              </MagneticButton>
            </div>
          </Reveal>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="text-2xl font-serif tracking-wide text-primary">
              Soulmira
            </Link>
            <div className="flex items-center gap-8">
              <Link href="#about" className="nav-link-anim text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#gallery" className="nav-link-anim text-sm text-muted-foreground hover:text-foreground transition-colors">
                Gallery
              </Link>
              <Link href="#contact" className="nav-link-anim text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://www.instagram.com/soulmira_art" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="mailto:xinjingdesign1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Soulmira Art Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
