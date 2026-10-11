'use client'

import { Button } from '@/components/ui/Button'
import { clsx } from 'clsx'

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    alt: 'Modern luxury apartment in Dubai Marina with city skyline view',
    width: 1920,
    height: 1080,
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    alt: 'Elegant villa exterior in Dubai Hills Estate with landscaped garden',
    width: 1920,
    height: 1080,
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    alt: 'Contemporary office space in Business Bay with modern architecture',
    width: 1920,
    height: 1080,
  },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 opacity-0 transition-opacity duration-1000 ease-soft"
            style={{
              animation: `hero-slide 18s ease-in-out infinite`,
              animationDelay: `${index * 6}s`,
            }}
          >
            <img
              src={image.src}
              alt={index === 0 ? image.alt : ''}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'low'}
              width={image.width}
              height={image.height}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950/70" />
          </div>
        ))}
        <style jsx global>{`
          @keyframes hero-slide {
            0%, 16.66% { opacity: 1; }
            33.33%, 100% { opacity: 0; }
          }
        `}</style>
      </div>

      <div className="relative z-10 container-main px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-in stagger-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-body-sm font-medium text-white mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available 24/7 • RERA Registered • Deira, Dubai
            </span>
          </div>

          <h1
            id="hero-heading"
            className="heading-display font-bold text-white text-balance animate-in stagger-2"
          >
            Your Trusted Partner for{' '}
            <span className="text-gradient">Dubai Real Estate</span>
          </h1>

          <p className="mt-6 body-lg text-white/90 max-w-2xl mx-auto text-balance animate-in stagger-3">
            Expert property sales, leasing, and investment consulting in Deira, Dubai.
            Licensed brokerage with deep market knowledge and personalized service.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in stagger-4">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Find Your Property
            </Button>
            <a
              href="https://wa.me/971501485560?text=Hello%20Homes%20R%20Us%2C%20I%27m%20interested%20in%20your%20real%20estate%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.402h-.004a9.87 9.87 0 01-5.031-1.378 9.86 9.86 0 01-.437-.217l-.438-.316a17.174 17.174 0 00-.711-.37c-3.508-1.643-5.788-5.095-5.913-5.426a.754.754 0 01-.128-.965.644.644 0 01.84-.107c.294.746 3.023 5.178 6.825 6.672a9.96 9.96 0 002.057.59c1.281.127 2.562.127 3.844 0a9.925 9.925 0 001.922-.498l.373-.31a.904.904 0 00-.054-1.337z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+971501485560"
              className="btn-call w-full sm:w-auto"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-in stagger-5" role="list" aria-label="Key statistics">
            {[
              { value: '500+', label: 'Properties Listed' },
              { value: '50+', label: 'Happy Clients' },
              { value: '10+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center" role="listitem">
                <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 body-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="h-6 w-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}