'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { clsx } from 'clsx'

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#properties', label: 'Properties' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-normal ease-soft',
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-neutral-200' : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="container-main" aria-label="Main navigation">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-heading font-medium text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-lg"
            aria-label="Homes R Us Real Estate Brokers - Home"
          >
            <svg className="h-8 w-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="M9 22V12h6v10" />
              <path d="M5 12h14" />
            </svg>
            <span className="hidden sm:block">Homes R Us</span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-body-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-md px-2 py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <a
              href="tel:+971501485560"
              className="btn-call hidden sm:inline-flex"
              aria-label="Call us: +971 50 148 5560"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">+971 50 148 5560</span>
            </a>
            <a
              href="https://wa.me/971501485560"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              aria-label="Chat on WhatsApp"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.402h-.004a9.87 9.87 0 01-5.031-1.378 9.86 9.86 0 01-.437-.217l-.438-.316a17.174 17.174 0 00-.711-.37c-3.508-1.643-5.788-5.095-5.913-5.426a.754.754 0 01-.128-.965.644.644 0 01.84-.107c.294.746 3.023 5.178 6.825 6.672a9.96 9.96 0 002.057.59c1.281.127 2.562.127 3.844 0a9.925 9.925 0 001.922-.498l.373-.31a.904.904 0 00-.054-1.337z" />
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={clsx(
          'lg:hidden overflow-hidden transition-all duration-normal ease-soft bg-white border-t border-neutral-200',
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="container-main py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-lg text-body font-medium text-neutral-600 hover:bg-neutral-50 hover:text-primary-600 transition-colors duration-fast"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-neutral-200 flex flex-col gap-3">
            <a
              href="tel:+971501485560"
              className="btn-call w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: +971 50 148 5560
            </a>
            <a
              href="https://wa.me/971501485560"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.402h-.004a9.87 9.87 0 01-5.031-1.378 9.86 9.86 0 01-.437-.217l-.438-.316a17.174 17.174 0 00-.711-.37c-3.508-1.643-5.788-5.095-5.913-5.426a.754.754 0 01-.128-.965.644.644 0 01.84-.107c.294.746 3.023 5.178 6.825 6.672a9.96 9.96 0 002.057.59c1.281.127 2.562.127 3.844 0a9.925 9.925 0 001.922-.498l.373-.31a.904.904 0 00-.054-1.337z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}