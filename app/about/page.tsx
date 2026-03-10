"use client"

import { Palette, Sparkles, Heart } from "lucide-react"
import { Reveal, RevealGroup } from "@/components/reveal"
import { TiltCard } from "@/components/tilt-card"
import { ParallaxImage } from "@/components/parallax-image"
import { testimonials } from "@/lib/data"

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <RevealGroup>
            <p className="reveal-text text-sm uppercase tracking-widest text-primary mb-4">About</p>
            <h1 className="reveal-text text-5xl md:text-7xl font-serif mb-6 max-w-3xl">
              Nurturing Creativity, One Brushstroke at a Time
            </h1>
            <p className="reveal-text text-lg text-muted-foreground max-w-xl">
              A creative sanctuary where children discover the joy of artistic expression.
            </p>
          </RevealGroup>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealGroup>
              <div>
                <h2 className="reveal-text text-3xl md:text-4xl font-serif mb-8 text-balance">
                  Our Story
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

            <Reveal type="image" delay={200}>
              <div className="aspect-[4/5] relative overflow-hidden">
                <ParallaxImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4095-8xnoezBKlS3OmmtTBqxkHrTcBvUwyD.jpeg"
                  alt="Children's artwork from Soulmira Art Studio"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-6 bg-card border-t border-border">
        <div className="container mx-auto">
          <RevealGroup className="mb-16">
            <p className="reveal-text text-sm uppercase tracking-widest text-primary mb-4">What We Offer</p>
            <h2 className="reveal-text text-3xl md:text-4xl font-serif text-balance">
              A Space for Every Young Artist
            </h2>
          </RevealGroup>

          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <TiltCard className="bg-background p-8 border border-border h-full">
                <Palette className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-xl mb-3">Mixed Media</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Exploring various art techniques and materials — from oil pastels and acrylics to collage and watercolor.
                </p>
              </TiltCard>
            </Reveal>
            <Reveal delay={100}>
              <TiltCard className="bg-background p-8 border border-border h-full">
                <Sparkles className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-xl mb-3">Imagination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Encouraging unique artistic expression through creative prompts, storytelling, and free exploration.
                </p>
              </TiltCard>
            </Reveal>
            <Reveal delay={200}>
              <TiltCard className="bg-background p-8 border border-border h-full">
                <Heart className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-xl mb-3">Nurturing Space</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A supportive environment where every child feels valued and inspired to grow through art.
                </p>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 border-t border-border">
        <div className="container mx-auto">
          <RevealGroup className="text-center mb-16">
            <p className="reveal-text text-sm uppercase tracking-widest text-primary mb-4">Testimonials</p>
            <h2 className="reveal-text text-3xl md:text-4xl font-serif text-balance">What Parents Say</h2>
          </RevealGroup>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Reveal key={index} delay={index * 120}>
                <TiltCard className="bg-card p-8 border border-border h-full">
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
    </>
  )
}
