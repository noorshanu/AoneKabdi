'use client'

import React from 'react'
import { motion } from 'framer-motion'

const presenceStats = [
  {
    id: 1,
    title: '50+ Cities',
    description: 'Active operations across metros and tier-2 cities, ensuring reliable pickups everywhere.',
  },
  {
    id: 2,
    title: '500+ Societies',
    description: 'Partnered housing societies working with us to achieve Zero-Waste Living.',
  },
  {
    id: 3,
    title: '1,00,000+ Pickups',
    description: 'Door-to-door scrap collections completed with transparency and instant payouts.',
  },
  {
    id: 4,
    title: 'Nationwide Impact',
    description: 'Creating green jobs, reducing landfill waste, and promoting the circular economy.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
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

export default function PresenceSection() {
  return (
    <section className="py-16 md:py-20 px-5 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#ff7400] mb-6">
            Our Presence Across Nation
          </h2>
          <p className="text-base md:text-lg text-black max-w-3xl mx-auto leading-relaxed bg-white p-5 rounded-xl">
            From villages to metro cities to emerging towns, <strong>AoneKabadi</strong> is building India&apos;s
            largest trusted scrap collection network. <br />
            With every doorstep pickup, we move closer to a <span className="text-[#ff7400] font-bold">Zero-Waste India</span> —
            empowering households, societies, and businesses to recycle smarter.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {presenceStats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              className="bg-[#72c28fab] border-2 border-green rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="text-xl md:text-2xl font-black text-[#ff7400] mb-3">
                {stat.title}
              </h3>
              <p className="text-sm md:text-base text-black leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

