'use client'

import { PropertyCard } from '@/components/ui/PropertyCard'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const featuredProperties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    alt: 'Luxury 3BR apartment in Dubai Marina with marina view',
    title: 'Marina View Luxury Apartment',
    location: 'Dubai Marina',
    price: 'AED 2,850,000',
    type: 'Sale' as const,
    bedrooms: 3,
    bathrooms: 2,
    area: '1,850 sq ft',
    featured: true,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    alt: 'Modern 4BR villa in Dubai Hills Estate with garden',
    title: 'Dubai Hills Family Villa',
    location: 'Dubai Hills Estate',
    price: 'AED 4,200,000',
    type: 'Sale' as const,
    bedrooms: 4,
    bathrooms: 3,
    area: '3,200 sq ft',
    featured: false,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    alt: 'Elegant 2BR apartment in Downtown Dubai near Burj Khalifa',
    title: 'Downtown Premium Residence',
    location: 'Downtown Dubai',
    price: 'AED 185,000/year',
    type: 'Rent' as const,
    bedrooms: 2,
    bathrooms: 2,
    area: '1,350 sq ft',
    featured: false,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    alt: 'Spacious 3BR apartment in Jumeirah Beach Residence',
    title: 'JBR Beachfront Apartment',
    location: 'Jumeirah Beach Residence',
    price: 'AED 220,000/year',
    type: 'Rent' as const,
    bedrooms: 3,
    bathrooms: 2,
    area: '1,650 sq ft',
    featured: false,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=800&q=80',
    alt: 'Modern office space in Business Bay with city views',
    title: 'Business Bay Commercial Office',
    location: 'Business Bay',
    price: 'AED 1,200/sq ft/year',
    type: 'Rent' as const,
    bedrooms: 0,
    bathrooms: 2,
    area: '2,500 sq ft',
    featured: false,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
    alt: 'Luxury penthouse in Palm Jumeirah with sea view',
    title: 'Palm Jumeirah Penthouse',
    location: 'Palm Jumeirah',
    price: 'AED 12,500,000',
    type: 'Sale' as const,
    bedrooms: 4,
    bathrooms: 4,
    area: '4,800 sq ft',
    featured: false,
  },
]

export function FeaturedProperties() {
  return (
    <section id="properties" className="section bg-neutral-50" aria-labelledby="properties-heading">
      <div className="container-main">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h2 id="properties-heading" className="heading-section text-4xl sm:text-5xl">
            Featured Properties
          </h2>
          <p className="mt-4 body-lg text-neutral-600">
            Handpicked selection of premium properties across Dubai's most sought-after locations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/properties">
            <Button variant="outline" size="lg">
              View All Properties
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}