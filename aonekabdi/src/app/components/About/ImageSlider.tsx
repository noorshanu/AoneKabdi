'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const images = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/assets/about/img${i + 1}.jpg`,
  alt: `About photo ${i + 1}`,
}))

export default function ImageSlider() {
  return (
    <section className="py-12 md:py-16 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#ff7400] mb-2">Our Journey in Pictures</h2>
          <p className="text-base text-gray-700">Snapshots from our operations and initiatives</p>
        </motion.div>

        <div className="overflow-hidden rounded-2xl">
          <Marquee
            speed={50}
            gradient={true}
            gradientColor="rgba(255,255,255,0.95)"
            pauseOnHover={true}
            className="py-4"
          >
            {images.map((img) => (
              <div
                key={`img-${img.id}`}
                className="mx-3 relative w-64 h-40 md:w-80 md:h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {images.map((img) => (
              <div
                key={`img-dup-${img.id}`}
                className="mx-3 relative w-64 h-40 md:w-80 md:h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

