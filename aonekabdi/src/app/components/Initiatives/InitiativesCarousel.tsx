'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const images = [
  { src: '/assets/scrap1.jpeg', alt: 'Initiative 1' },
  { src: '/assets/scrap2.jpeg', alt: 'Initiative 2' },
  { src: '/assets/scrap3.jpeg', alt: 'Initiative 3' },
  { src: '/assets/scrap4.jpeg', alt: 'Initiative 4' },
  { src: '/assets/scrap5.jpeg', alt: 'Initiative 5' },
]

export default function InitiativesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <section className="py-12 md:py-16 px-5 bg-gradient-to-b from-white to-[#f6fbf8]">
      <div className="max-w-[1150px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#ff7400] mb-4">
            🌍 Our Initiatives in Action
          </h2>
          <p className="text-lg text-gray-700">
            Snapshots from our campaigns, drives, and community engagement programs.
          </p>
        </motion.div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#22c55e]">
          {/* Carousel Container */}
          <div className="relative h-[360px] md:h-[480px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1150px"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-gradient-to-b from-[#ff7a36] to-[#ff5c00] text-white shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform z-10"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-gradient-to-b from-[#ff7a36] to-[#ff5c00] text-white shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform z-10"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((img, index) => (
              <button
                key={`initiatives-carousel-indicator-${img.id}-${index}`}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#ff6600] w-8 shadow-lg'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

