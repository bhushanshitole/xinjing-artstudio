import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CustomCursor } from '@/components/custom-cursor'
import { ScrollProgress } from '@/components/scroll-progress'
import { NoiseOverlay } from '@/components/noise-overlay'
import { SmoothScroll } from '@/components/smooth-scroll'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif'
});
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Soulmira Art Studio - Children\'s Art Workshop',
  description: 'Nurturing creativity and imagination through art. A children\'s art studio where young artists explore colors, shapes, and self-expression.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <CustomCursor />
        <ScrollProgress />
        <NoiseOverlay />
        <SmoothScroll />
        <Navigation />
        <main className="min-h-screen bg-background text-foreground">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
