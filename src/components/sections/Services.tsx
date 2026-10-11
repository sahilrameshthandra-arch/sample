'use client'

import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { clsx } from 'clsx'

const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
      </svg>
    ),
    title: 'Property Sales',
    description: 'Expert guidance for buying and selling residential and commercial properties across Dubai. From off-plan to ready properties.',
    features: ['Off-plan & Ready', 'Villas & Apartments', 'Commercial Spaces', 'Investment Properties'],
    badge: 'Core Service',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Property Leasing',
    description: 'Comprehensive leasing services for landlords and tenants. Long-term and short-term rentals with full documentation support.',
    features: ['Residential Leasing', 'Commercial Leasing', 'Short-term Rentals', 'Lease Management'],
    badge: 'Core Service',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Investment Consulting',
    description: 'Strategic investment advice for maximum ROI. Market analysis, portfolio diversification, and rental yield optimization.',
    features: ['ROI Analysis', 'Market Trends', 'Portfolio Building', 'Risk Assessment'],
    badge: 'Advisory',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Property Valuation',
    description: 'Accurate market valuations for sales, purchases, mortgages, and insurance. RERA-compliant appraisal reports.',
    features: ['Market Valuation', 'Rental Assessment', 'Mortgage Valuation', 'Insurance Valuation'],
    badge: 'Advisory',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Property Management',
    description: 'Full-service property management including tenant screening, rent collection, maintenance, and regulatory compliance.',
    features: ['Tenant Management', 'Rent Collection', 'Maintenance', 'Compliance'],
    badge: 'Management',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Legal & Documentation',
    description: 'End-to-end legal support for property transactions. Contracts, title deeds, Ejari registration, and RERA compliance.',
    features: ['Contract Review', 'Title Deeds', 'Ejari Registration', 'RERA Compliance'],
    badge: 'Legal',
  },
]

export function Services() {
  return (
    <section id="services" className="section bg-white" aria-labelledby="services-heading">
      <div className="container-main">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            Our Services
          </Badge>
          <h2 id="services-heading" className="heading-section text-4xl sm:text-5xl">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="mt-4 body-lg text-neutral-600">
            From buying your dream home to managing your investment portfolio, we offer end-to-end real estate services tailored to your needs.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={service.title} variant="hover" padding="lg" className="animate-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 text-primary-600 mb-5">
                {service.icon}
              </div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="heading-md font-semibold text-neutral-950">{service.title}</h3>
                <Badge variant="primary" size="sm">{service.badge}</Badge>
              </div>
              <p className="body text-neutral-600 mb-5">{service.description}</p>
              <ul className="space-y-2" role="list">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 body-sm text-neutral-600">
                    <svg className="h-4 w-4 text-primary-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}