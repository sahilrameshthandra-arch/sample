'use client'

import { clsx } from 'clsx'
import { Badge } from './Badge'

interface PropertyCardProps {
  image: string
  alt: string
  title: string
  location: string
  price: string
  type: 'Sale' | 'Rent'
  bedrooms: number
  bathrooms: number
  area: string
  featured?: boolean
  onClick?: () => void
}

export function PropertyCard({
  image,
  alt,
  title,
  location,
  price,
  type,
  bedrooms,
  bathrooms,
  area,
  featured,
  onClick,
}: PropertyCardProps) {
  return (
    <article
      className={clsx(
        'card-hover overflow-hidden',
        featured && 'lg:col-span-2 lg:row-span-2'
      )}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick?.() } }}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? `View details for ${title}` : undefined}
    >
      <div className="relative aspect-[4/3] lg:aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading={featured ? 'eager' : 'lazy'}
          fetchPriority={featured ? 'high' : 'low'}
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant={type === 'Sale' ? 'primary' : 'accent'} size="sm">
            {type}
          </Badge>
          {featured && (
            <Badge variant="secondary" size="sm">
              Featured
            </Badge>
          )}
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 text-body-sm font-semibold text-neutral-900">
            {price}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="heading-sm font-semibold text-neutral-950 line-clamp-1 text-balance">
            {title}
          </h3>
        </div>
        <p className="body-sm text-neutral-500 flex items-center gap-1 mb-3">
          <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </p>
        <div className="flex items-center gap-4 text-body-sm text-neutral-600">
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
            </svg>
            {bedrooms} Bed
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            {bathrooms} Bath
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
            {area}
          </span>
        </div>
      </div>
    </article>
  )
}