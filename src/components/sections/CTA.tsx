'use client'

import { Button } from '@/components/ui/Button'
import { clsx } from 'clsx'

export function CTA() {
  return (
    <section id="contact" className="section relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900" aria-hidden="true" />
      <div className="absolute inset-0 opacity-50" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="none">
          <g fill="white" fillOpacity="0.03" fillRule="evenodd">
            <path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z" />
          </g>
        </svg>
      </div>

      <div className="relative container-main">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-in stagger-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-body-sm font-medium text-white mb-6">
              <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Ready to Find Your Perfect Property?
            </span>
          </div>

          <h2 id="cta-heading" className="heading-display font-bold text-white text-balance animate-in stagger-2">
            Let&apos;s Start Your Property Journey
          </h2>

          <p className="mt-6 body-lg text-white/90 max-w-2xl mx-auto text-balance animate-in stagger-3">
            Whether you&apos;re buying, selling, leasing, or investing &mdash; our expert team in Deira is ready to guide you every step of the way.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in stagger-4">
            <a
              href="https://wa.me/971501485560?text=Hello%20Homes%20R%20Us%2C%20I%27m%20interested%20in%20your%20real%20estate%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto text-lg px-8 py-4"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.402h-.004a9.87 9.87 0 01-5.031-1.378 9.86 9.86 0 01-.437-.217l-.438-.316a17.174 17.174 0 00-.711-.37c-3.508-1.643-5.788-5.095-5.913-5.426a.754.754 0 01-.128-.965.644.644 0 01.84-.107c.294.746 3.023 5.178 6.825 6.672a9.96 9.96 0 002.057.59c1.281.127 2.562.127 3.844 0a9.925 9.925 0 001.922-.498l.373-.31a.904.904 0 00-.054-1.337z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="tel:+971501485560"
              className="btn-call w-full sm:w-auto text-lg px-8 py-4 border-2 border-white/30 hover:bg-white/10"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +971 50 148 5560
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-in stagger-5">
            {[
              { icon: '📍', title: 'Visit Our Office', desc: 'Deira, Dubai, UAE' },
              { icon: '⏰', title: 'Business Hours', desc: 'Sat&ndash;Thu: 9AM&ndash;7PM' },
              { icon: '✉️', title: 'Email Us', desc: 'info@homesrus-realestate.ae' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="heading-sm font-semibold text-white mb-1">{item.title}</h3>
                <p className="body-sm text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}