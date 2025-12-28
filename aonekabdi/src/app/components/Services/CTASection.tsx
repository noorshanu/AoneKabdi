'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CTASectionProps {
  onOpenModal: (type: 'pickup' | 'franchise') => void
}

export default function CTASection({ onOpenModal }: CTASectionProps) {
  return (
    <section className="py-20 md:py-28 px-5 bg-gradient-to-br from-[#22c55e] via-[#16a34a] to-[#15803d] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-6"
          >
            <span className="text-white/90 text-sm md:text-base font-bold px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
              Ready to Get Started?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Let&apos;s Transform Your
            <br />
            <span className="text-[#ff7400]">Scrap into Value</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of satisfied customers. Book a pickup today or explore franchise opportunities to start your own sustainable business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center items-center mb-8"
          >
            <motion.a
              href="tel:+917856815038"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-[#22c55e] font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors shadow-2xl hover:shadow-3xl"
            >
              📞 Call Now
            </motion.a>
            <motion.button
              onClick={() => onOpenModal('pickup')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-3 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Book Free Pickup
            </motion.button>
            <motion.button
              onClick={() => onOpenModal('franchise')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-3 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Become a Franchise Partner
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              <span>Free Pickup</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              <span>Instant Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              <span>100,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

