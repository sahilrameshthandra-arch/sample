'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { FeaturedProperties } from '@/components/sections/FeaturedProperties'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'
import { JsonLd } from '@/components/ui/JsonLd'

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Homes R Us Real Estate Brokers',
    url: 'https://homesrus-realestate.ae',
    telephone: '+971-50-148-5560',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
      streetAddress: 'Deira',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2692,
      longitude: 55.3095,
    },
    areaServed: 'Dubai, UAE',
    priceRange: '$$$',
    currenciesAccepted: 'AED',
    paymentAccepted: 'Cash, Bank Transfer, Credit Card',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      'https://wa.me/971501485560',
      'https://maps.google.com/?cid=12249532373245417119',
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <Services />
        <FeaturedProperties />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}