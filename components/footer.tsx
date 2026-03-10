"use client"

import { Instagram, Mail } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { marqueeItems } from "@/lib/data"

export function Footer() {
  return (
    <>
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

      {/* Footer */}
      <footer className="py-16 px-6">
        <div className="container mx-auto">
          {/* Footer CTA */}
          <Reveal>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between pb-12 mb-10 border-b border-border gap-8">
              <h3 className="text-3xl md:text-4xl font-serif max-w-sm">Let&apos;s create together.</h3>
              <MagneticButton as="a" href="/contact">
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
              <Link href="/about" className="nav-link-anim text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/gallery" className="nav-link-anim text-sm text-muted-foreground hover:text-foreground transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="nav-link-anim text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://www.instagram.com/soulmira_art" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="mailto:soulmiraart@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
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
    </>
  )
}
