'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const testimonials = [
  {
    id: 1,
    quote: 'Fast pickup and fair prices. They recycled our old appliances without any hassle — five stars.',
    name: 'Ravi Patel',
    meta: 'Delhi · Home pickup',
    stars: 5,
  },
  {
    id: 2,
    quote: 'Punctual and transparent. Payment was instant and the staff was very helpful.',
    name: 'Meera Singh',
    meta: 'Gurgaon · Office clearance',
    stars: 4,
  },
  {
    id: 3,
    quote: 'Best rates in the area. Quick inspection and they took everything. Smooth service.',
    name: 'Suresh Kumar',
    meta: 'Noida · Scrap sale',
    stars: 5,
  },
  {
    id: 4,
    quote: 'Very professional team. They even gave us tips on reducing household waste.',
    name: 'Anjali Rao',
    meta: 'Mumbai · Recycling',
    stars: 5,
  },
  {
    id: 5,
    quote: 'Perfect for bulk scrap collections. Billing was clear and quick.',
    name: 'Vikram Joshi',
    meta: 'Pune · Bulk collection',
    stars: 4,
  },
  {
    id: 6,
    quote: 'Superb service. They arrived on time and handled everything smoothly.',
    name: 'Priya Nair',
    meta: 'Bengaluru · Doorstep pickup',
    stars: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const renderStars = (count: number) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count)
  }

  return (
    <section
      className="py-16 md:py-20 px-5 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#ff7400] mb-4">
            Why 100,000+ customers love us
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Trusted for quick pickups, fair pricing and eco-friendly recycling.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl text-gray-700 hover:bg-[#22c55e] hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className="overflow-hidden mx-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border-2 border-gray-100"
              >
                <div className="text-6xl text-[#22c55e] mb-4">&quot;</div>
                <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="border-t pt-6">
                  <div className="font-bold text-black text-lg mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {testimonials[currentIndex].meta} ·{' '}
                    <span className="text-yellow-500">
                      {renderStars(testimonials[currentIndex].stars)}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl text-gray-700 hover:bg-[#22c55e] hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={`testimonial-indicator-${testimonial.id}-${index}`}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[#22c55e] w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#22c55e] text-white font-bold rounded-lg hover:bg-[#16a34a] transition-colors shadow-lg"
          >
            Book a pickup
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            Rated <strong>4.8/5</strong> by over <strong>100,000</strong> customers
          </p>
        </motion.div>
      </div>
    </section>
  )
}

