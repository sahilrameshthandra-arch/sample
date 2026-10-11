'use client'

import { Card, CardContent } from '@/components/ui/Card'
import { clsx } from 'clsx'

const reasons = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'RERA Registered & Licensed',
    description: 'Fully licensed by the Real Estate Regulatory Agency (RERA) ensuring compliance with all Dubai real estate laws and regulations.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Local Market Expertise',
    description: 'Deep knowledge of Dubai\'s diverse neighborhoods, from Deira\'s traditional charm to Downtown\'s modern luxury and emerging areas.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '24/7 Availability',
    description: 'Real estate doesn\'t wait. Our team is available around the clock via phone and WhatsApp for urgent inquiries and viewings.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'End-to-End Support',
    description: 'From initial search to final handover — we handle viewings, negotiations, documentation, Ejari, and post-sale services.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Transaction Closure',
    description: 'Streamlined processes and strong industry connections ensure quick deal closure — often within 2-4 weeks for ready properties.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: 'Transparent & Ethical',
    description: 'No hidden fees, no pressure tactics. Honest advice, clear communication, and your best interests always come first.',
  },
]

const trustSignals = [
  { label: 'RERA Licensed', value: '100%' },
  { label: 'Client Retention', value: '95%+' },
  { label: 'Avg. Deal Time', value: '21 Days' },
  { label: 'Properties Sold', value: '500+' },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section bg-white" aria-labelledby="why-us-heading">
      <div className="container-main">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="why-us-heading" className="heading-section text-4xl sm:text-5xl">
            Why Choose Homes R Us
          </h2>
          <p className="mt-4 body-lg text-neutral-600">
            Dubai's real estate market is competitive. Here's why discerning buyers, sellers, and investors trust us with their property journey.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <Card key={reason.title} variant="hover" padding="lg" className="animate-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-600 mb-4">
                {reason.icon}
              </div>
              <h3 className="heading-md font-semibold text-neutral-950 mb-2">{reason.title}</h3>
              <p className="body text-neutral-600">{reason.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustSignals.map((signal, index) => (
            <div key={signal.label} className="text-center p-4 md:p-6 rounded-xl bg-neutral-50 animate-in" style={{ animationDelay: `${(reasons.length + index) * 0.1}s` }}>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600">{signal.value}</div>
              <div className="mt-1 body-sm text-neutral-600 font-medium">{signal.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}