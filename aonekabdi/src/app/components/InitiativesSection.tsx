'use client'

import React from 'react'
import { motion } from 'framer-motion'

const initiatives = [
  {
    id: 1,
    title: 'Tetra Pak Initiative',
    kicker: 'UBC collection & reuse',
    description: 'In partnership with Tetra Pak India, we collect Used Beverage Cartons (UBCs) from homes, schools and retail outlets. Cartons are recycled into panels, stationery & building materials — saving trees & reducing landfill.',
    badges: ['80+ cities', 'School drives'],
    icon: '📦',
  },
  {
    id: 2,
    title: 'Mattress Circular Journey',
    kicker: 'Feko Nahi, Recycle Karo',
    description: 'Our large-scale mattress recycling dismantles old mattresses into coir, foam, fabric and metal, which are then reintroduced into manufacturing. How you benefit: safe collection, zero-hassle pickup, and reduced disposal fees.',
    badges: ['Bulk pickup', 'Workshops'],
    icon: '🛏️',
  },
  {
    id: 3,
    title: 'Tree Plantation',
    kicker: 'Reforesting communities',
    description: 'For every ton recycled, we contribute to plantation drives with partner NGOs and local communities. Supported 10,000+ saplings, created green corridors, and engaged volunteers.',
    badges: ['10,000+ saplings', 'Community drives'],
    icon: '🌳',
  },
  {
    id: 4,
    title: 'Kitab Ghar',
    kicker: 'Books for every child',
    description: 'We collect gently-used books and distribute them to community libraries and schools in underserved areas. 50,000+ books donated — boosting literacy and reducing paper waste.',
    badges: ['50,000+ books', 'Community libraries'],
    icon: '📚',
  },
  {
    id: 5,
    title: 'E-Waste Drive',
    kicker: 'Responsible device recycling',
    description: 'Collection events for phones, chargers & electronics. Partnering with certified recyclers for secure, eco-friendly disposal and material recovery.',
    badges: ['Data-safe', 'Certified partners'],
    icon: '📱',
  },
  {
    id: 6,
    title: 'Plastic Circular Drive',
    kicker: 'Turning waste into raw material',
    description: 'Community drives for PET & HDPE plastics. Materials are processed into pellets for reuse in packaging & products. Earn credits for plastic returns — redeemable against pickups or offers.',
    badges: ['Credit rewards', 'Recycling partners'],
    icon: '🔄',
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
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 18,
      duration: 0.6,
    },
  },
}

export default function InitiativesSection() {
  return (
    <section className="py-16 md:py-20 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#ff7400] mb-3">
            🚀 Our Initiatives
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {initiatives.map((initiative) => (
            <motion.div
              key={initiative.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              className="bg-[#72c28fab] border-2 border-green rounded-2xl p-6 flex flex-col gap-4 shadow-md hover:shadow-xl transition-all min-h-[280px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green to-green-light flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                  {initiative.icon}
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#ff7400] mb-1">
                    {initiative.title}
                  </h3>
                  <p className="text-xs font-bold text-gray-600">
                    {initiative.kicker}
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-black leading-relaxed flex-1">
                {initiative.description}
              </p>

              <div className="flex gap-2 flex-wrap mt-auto">
                {initiative.badges.map((badge, idx) => (
                  <span
                    key={`initiative-${initiative.id}-badge-${badge}-${idx}`}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
                      idx === 0
                        ? 'bg-green text-white'
                        : 'bg-white/60 border border-gray-200 text-black'
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

