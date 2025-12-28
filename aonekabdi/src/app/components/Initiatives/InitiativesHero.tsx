'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function InitiativesHero() {
  return (
    <section className="py-12 md:py-16 px-5 bg-gradient-to-br from-white to-[#f6fbf8]">
      <div className="max-w-[1150px] mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-[#ff7400] mb-4 leading-tight uppercase tracking-tight"
          style={{
            textShadow: '2px 2px 0 #000, 4px 4px 0 #000, 6px 6px 0 rgba(0,0,0,0.8), 0 6px 20px rgba(255,102,0,0.45)'
          }}
        >
          🚀 Initiatives
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
        >
          Small steps with big impact — we believe every campaign brings us closer to a greener, smarter and fairer India.
        </motion.p>
      </div>
    </section>
  )
}

