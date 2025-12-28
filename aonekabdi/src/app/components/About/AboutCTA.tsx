'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutCTA() {
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
              Join Our Mission
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Ready to Make an Impact?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you&apos;re looking to sell scrap, become a franchise partner, or join our team — we&apos;re here to help you turn waste into opportunity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <motion.a
              href="tel:+917856815038"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-[#22c55e] font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors shadow-2xl hover:shadow-3xl"
            >
              📞 Call Us Now
            </motion.a>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="px-10 py-5 border-3 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm inline-block"
              >
                Get in Touch
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/franchise"
                className="px-10 py-5 border-3 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm inline-block"
              >
                Join as Franchise
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

