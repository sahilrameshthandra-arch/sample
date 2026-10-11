'use client'

import { useState, useCallback, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { clsx } from 'clsx'

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Al Mansouri',
    role: 'Property Investor',
    location: 'Dubai Marina',
    content: 'Homes R Us made my first Dubai property investment seamless. Their market knowledge is exceptional, and they negotiated a fantastic deal on my Marina apartment. The paperwork was handled professionally from start to finish.',
    rating: 5,
    propertyType: 'Investment Purchase',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'Expat Professional',
    location: 'Downtown Dubai',
    content: 'As a newcomer to Dubai, I was overwhelmed by the rental market. The team at Homes R Us understood my needs perfectly and found me a beautiful Downtown apartment within my budget. Their responsiveness on WhatsApp was incredible.',
    rating: 5,
    propertyType: 'Residential Lease',
  },
  {
    id: 3,
    name: 'Rashid Al Falasi',
    role: 'Business Owner',
    location: 'Business Bay',
    content: 'We needed commercial space for our expanding business. Homes R Us presented us with three excellent options in Business Bay within a week. Their understanding of commercial lease terms saved us significant money.',
    rating: 5,
    propertyType: 'Commercial Lease',
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'Home Buyer',
    location: 'Jumeirah Village Circle',
    content: 'Buying off-plan can be risky, but Homes R Us guided us through every step — from developer verification to payment schedules and handover. Our JVC villa is now our dream home. Highly recommended for first-time buyers.',
    rating: 5,
    propertyType: 'Off-Plan Purchase',
  },
  {
    id: 5,
    name: 'James Thompson',
    role: 'Landlord',
    location: 'Dubai Hills Estate',
    content: 'I\'ve been using their property management service for two years. They handle everything — tenant screening, rent collection, maintenance requests. My Dubai Hills villa has had zero vacancy periods. True peace of mind.',
    rating: 5,
    propertyType: 'Property Management',
  },
  {
    id: 6,
    name: 'Fatima Al Zahra',
    role: 'Seller',
    location: 'Al Barsha',
    content: 'Sold my Al Barsha apartment in just 18 days at asking price. Their marketing strategy with professional photos and virtual tours attracted serious buyers immediately. The negotiation was handled expertly.',
    rating: 5,
    propertyType: 'Property Sale',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const itemsPerView = typeof window !== 'undefined' ? (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1) : 3
  const maxIndex = testimonials.length - itemsPerView

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)))
  }, [maxIndex])

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1)
  }, [currentIndex, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1)
  }, [currentIndex, goToSlide])

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
      const newMaxIndex = testimonials.length - newItemsPerView
      setCurrentIndex(Math.min(currentIndex, Math.max(0, newMaxIndex)))
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentIndex])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide()
    }
    setTouchStart(null)
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section id="testimonials" className="section bg-neutral-50" aria-labelledby="testimonials-heading">
      <div className="container-main">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h2 id="testimonials-heading" className="heading-section text-4xl sm:text-5xl">
            Trusted by Clients Across Dubai
          </h2>
          <p className="mt-4 body-lg text-neutral-600">
            Real stories from satisfied clients who found their perfect property with Homes R Us.
          </p>
        </header>

        <div className="relative">
          <div
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-label="Client testimonials carousel"
          >
            {visibleTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                variant="bordered"
                padding="lg"
                className="flex-1 min-w-[280px] max-w-xs md:max-w-md lg:max-w-lg shrink-0 snap-center animate-in"
                style={{ animationDelay: `${testimonials.indexOf(testimonial) * 0.1}s` }}
              >
                <div className="flex items-center gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={clsx('h-5 w-5', i < testimonial.rating ? 'text-secondary-500 fill-current' : 'text-neutral-300')}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="body text-neutral-700 mb-5">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-body">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">{testimonial.name}</div>
                    <div className="body-sm text-neutral-500">{testimonial.role} • {testimonial.location}</div>
                    <span className="badge-neutral mt-1 inline-block">{testimonial.propertyType}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {testimonials.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-12 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-neutral-600 hover:text-primary-600 hover:bg-white transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                aria-label="Previous testimonial"
                aria-disabled={currentIndex === 0}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-12 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-neutral-600 hover:text-primary-600 hover:bg-white transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                aria-label="Next testimonial"
                aria-disabled={currentIndex >= maxIndex}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Testimonial navigation">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={clsx(
                  'w-2 h-2 rounded-full transition-all duration-fast',
                  i === currentIndex
                    ? 'bg-primary-600 w-6'
                    : 'bg-neutral-300 hover:bg-neutral-400'
                )}
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Go to testimonial group ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}