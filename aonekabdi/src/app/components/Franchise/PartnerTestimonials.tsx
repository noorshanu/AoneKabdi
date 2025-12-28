'use client'

import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    initials: 'SK',
    name: 'Sunita — Dhanbad',
    quote: 'Customers loved the timely pickups. Training made everything simple — from collection to payments.',
  },
  {
    id: 2,
    initials: 'AM',
    name: 'Amit — Jamshedpur',
    quote: 'The digital route app saved us hours each week. My team grew to 12 people in months.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const testimonialVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function PartnerTestimonials() {
  return (
    <section className="py-16 md:py-20 px-5 bg-white">
      <div className="max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#72c28fab] border-2 border-[#22c55e] rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#ff7400] mb-8 text-center">
            Voices from our partners
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={testimonialVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white/80 border border-gray-200 rounded-xl p-6 flex gap-4 items-start hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#22c55e] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 mb-2">{testimonial.name}</div>
                  <p className="text-sm text-gray-700 italic leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

