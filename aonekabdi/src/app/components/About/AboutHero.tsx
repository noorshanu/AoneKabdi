'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="py-16 md:py-20 px-5 bg-gradient-to-br from-[#f6fbf8] via-white to-[#f6fbf8]">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-6"
          >
            <span className="text-sm font-bold text-[#ff7400] px-4 py-2 bg-[#ff7400]/10 rounded-full">
              Our Story
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#ff7400] mb-6 leading-tight">
            About Aone Kabadi
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering recycling entrepreneurs with training, streamlined collection, and strategic marketing to turn scrap into profitable opportunity.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

