"use client"

import { useState } from "react"
import { Instagram, Mail, Menu, X, ChevronRight, Palette, Sparkles, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

const galleryPreview = [
  {
    title: "Inner World",
    description: "Expressing emotions and personal visions"
  },
  {
    title: "Exploration",
    description: "Discovering new techniques and materials"
  },
  {
    title: "Creativity",
    description: "Bringing imagination to life through art"
  },
  {
    title: "Inspiration",
    description: "Finding beauty in everyday moments"
  }
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif tracking-wide text-primary">
            Soulmira
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#gallery" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Gallery
            </Link>
            <Link href="#contact" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="https://www.instagram.com/soulmira_art" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="mailto:hello@soulmira.art" className="text-muted-foreground hover:text-primary transition-colors">
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
                <Link href="mailto:hello@soulmira.art" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-widest text-primary">Art Studio</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight text-balance">
                Soulmira
                <span className="block text-primary">Art Studio</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
                Where young imaginations come to life through colors, shapes, and boundless creativity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#gallery" 
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  View Gallery
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="#contact" 
                  className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 text-sm uppercase tracking-widest hover:bg-secondary transition-colors"
                >
                  Join Us
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">(Est. 2020)</p>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4095-8xnoezBKlS3OmmtTBqxkHrTcBvUwyD.jpeg"
                  alt="Children's artwork from Soulmira Art Studio"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 border border-border">
                <p className="text-4xl font-serif text-primary">100+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Young Artists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary mb-4">About</p>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-balance">
                Nurturing Creativity, One Brushstroke at a Time
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Soulmira Art Studio is a creative sanctuary where children discover the joy of artistic expression. 
                  Our mission is to nurture young minds through hands-on art experiences that encourage exploration, 
                  self-expression, and confidence.
                </p>
                <p>
                  From vibrant paintings to imaginative drawings, our students create artwork that reflects their 
                  unique perspectives and boundless creativity. Every class is an adventure in color, texture, and 
                  storytelling.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card p-6 border border-border">
                  <Palette className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif text-xl mb-2">Mixed Media</h3>
                  <p className="text-sm text-muted-foreground">Exploring various art techniques and materials</p>
                </div>
                <div className="bg-card p-6 border border-border">
                  <Heart className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif text-xl mb-2">Nurturing Space</h3>
                  <p className="text-sm text-muted-foreground">A supportive environment for creative growth</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-card p-6 border border-border">
                  <Sparkles className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif text-xl mb-2">Imagination</h3>
                  <p className="text-sm text-muted-foreground">Encouraging unique artistic expression</p>
                </div>
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4112-I7heuuQdSRHbuvhR8M5jXw3MAQ42KF.jpeg"
                    alt="Road map artwork by young artists"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section id="gallery" className="py-24 px-6 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary mb-4">Gallery Exhibitions</p>
            <h2 className="text-4xl md:text-5xl font-serif text-balance">Explore Our Young Artists&apos; Work</h2>
          </div>
          
          {/* Scrolling Gallery Titles */}
          <div className="overflow-hidden py-8 mb-12">
            <div className="flex gap-8 animate-scroll">
              {[...galleryPreview, ...galleryPreview].map((item, index) => (
                <div key={index} className="flex-shrink-0 group cursor-pointer">
                  <h3 className="text-2xl md:text-3xl font-serif whitespace-nowrap text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="group cursor-pointer">
                <div className="aspect-square relative overflow-hidden mb-4">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg">{artwork.title}</h3>
                    <p className="text-sm text-muted-foreground">{artwork.category}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">({artwork.year})</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="https://www.instagram.com/soulmira_art" 
              target="_blank"
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-secondary transition-colors"
            >
              View Full Gallery
              <Instagram className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-serif text-balance">What Parents Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-8 border border-border">
                <p className="text-lg leading-relaxed mb-6 text-balance">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-serif text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary mb-4">Join Us</p>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-balance">
                Start Your Child&apos;s Creative Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Ready to nurture your child&apos;s artistic talents? Get in touch to learn about our classes, 
                workshops, and creative programs designed for young artists of all skill levels.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Instagram className="w-5 h-5 text-primary" />
                  <Link 
                    href="https://www.instagram.com/soulmira_art" 
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    @soulmira_art
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <Link 
                    href="mailto:hello@soulmira.art"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    hello@soulmira.art
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-cMzuPORJBHhgez8HbjLEQtYt6ChZ42.png"
                  alt="Gallery of artwork from Soulmira Art Studio"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="text-2xl font-serif tracking-wide text-primary">
              Soulmira
            </Link>
            <div className="flex items-center gap-8">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Gallery
              </Link>
              <Link href="#collections" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Collections
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://www.instagram.com/soulmira_art" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="mailto:hello@soulmira.art" className="text-muted-foreground hover:text-primary transition-colors">
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

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
