'use client'

import React from 'react'
import { motion } from 'framer-motion'

const impacts = [
  { value: '5+', label: 'Cities' },
  { value: '500+', label: 'Active Partners' },
  { value: '50K+', label: 'Households Served' },
  { value: '2,500+', label: 'Tonnes Recycled / yr' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const impactVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function FranchiseImpact() {
  return (
    <section className="py-16 md:py-20 px-5 bg-gradient-to-b from-white to-[#f6fbf8]">
      <div className="max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#72c28fab] border-2 border-[#22c55e] rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#ff7400] mb-8 text-center">
            Impact & Quick Facts
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {impacts.map((impact, idx) => (
              <motion.div
                key={`impact-${impact.value}-${impact.label}-${idx}`}
                variants={impactVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-[#72c28fab] border-2 border-[#22c55e] rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-4xl md:text-5xl font-black text-[#22c55e] mb-2">
                  {impact.value}
                </div>
                <div className="text-sm md:text-base text-gray-700 font-semibold">
                  {impact.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

