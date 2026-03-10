"use client"

import { Instagram, Mail } from "lucide-react"
import Link from "next/link"
import { Reveal, RevealGroup } from "@/components/reveal"
import { MagneticButton } from "@/components/magnetic-button"

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <RevealGroup>
            <p className="reveal-text text-sm uppercase tracking-widest text-primary mb-4">Contact</p>
            <h1 className="reveal-text text-5xl md:text-7xl font-serif mb-6 max-w-3xl">
              Start Your Child&apos;s Creative Journey
            </h1>
            <p className="reveal-text text-lg text-muted-foreground max-w-xl">
              Ready to nurture your child&apos;s artistic talents? Get in touch to learn about our classes,
              workshops, and creative programs.
            </p>
          </RevealGroup>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <RevealGroup>
                <h2 className="reveal-text text-3xl font-serif mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <Reveal delay={0}>
                    <Link
                      href="mailto:soulmiraart@gmail.com"
                      className="flex items-start gap-4 group"
                    >
                      <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                        <p className="text-lg nav-link-anim group-hover:text-primary transition-colors">soulmiraart@gmail.com</p>
                      </div>
                    </Link>
                  </Reveal>
                  <Reveal delay={100}>
                    <Link
                      href="https://www.instagram.com/soulmira_art"
                      target="_blank"
                      className="flex items-start gap-4 group"
                    >
                      <Instagram className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">Instagram</p>
                        <p className="text-lg nav-link-anim group-hover:text-primary transition-colors">@soulmira_art</p>
                      </div>
                    </Link>
                  </Reveal>
                </div>
              </RevealGroup>
            </div>

            <div>
              <RevealGroup>
                <h2 className="reveal-text text-3xl font-serif mb-8">Classes & Programs</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="reveal-text">
                    We offer art classes for children of all skill levels. From beginners exploring their first brushstrokes
                    to young artists developing their unique style.
                  </p>
                  <p className="reveal-text">
                    Send us a message to learn about available class times, materials provided, and how to enroll your child.
                  </p>
                </div>
                <Reveal delay={200} className="mt-8">
                  <MagneticButton as="a" href="mailto:soulmiraart@gmail.com">
                    <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
                      Send Email
                      <Mail className="w-4 h-4" />
                    </span>
                  </MagneticButton>
                </Reveal>
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
