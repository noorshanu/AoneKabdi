'use client'

import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  {
    id: 1,
    icon: '♻️',
    value: '1200+ Tons',
    label: 'Waste recycled & diverted from landfills',
  },
  {
    id: 2,
    icon: '📚',
    value: '50,000+',
    label: 'Books redistributed through Kitab Ghar',
  },
  {
    id: 3,
    icon: '🌱',
    value: '300+',
    label: 'Schools & communities educated',
  },
  {
    id: 4,
    icon: '👥',
    value: '10,000+',
    label: 'Volunteers joined our clean-up drives',
  },
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

const statVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function InitiativesStats() {
  return (
    <section className="py-12 md:py-16 px-5 bg-white">
      <div className="max-w-[1150px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={statVariants}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className="bg-gradient-to-br from-[#22c55e]/10 to-[#16a34a]/5 border-2 border-[#22c55e]/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-black text-[#22c55e] mb-2">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

