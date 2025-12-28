'use client'

import React from 'react'
import { motion } from 'framer-motion'

const initiatives = [
  {
    id: 1,
    icon: '📦',
    title: 'Tetra Pak Initiative',
    description: 'Collecting UBC for recycling with partners — turning waste cartons into notebooks, benches and other useful materials.',
  },
  {
    id: 2,
    icon: '🛏️',
    title: 'Mattress Recycling',
    description: 'Old mattresses are difficult to dispose of — we pioneered recovery of fibres, foam and springs to reduce landfill load.',
  },
  {
    id: 3,
    icon: '📚',
    title: 'Kitab Ghar',
    description: 'A community-driven library program redistributing used books to children and schools in need, nurturing education and literacy.',
  },
  {
    id: 4,
    icon: '🧱',
    title: 'Plastic Wall Experiment',
    description: 'We built awareness by making walls out of compressed plastic waste, showing how innovation can tackle pollution.',
  },
  {
    id: 5,
    icon: '🌱',
    title: 'Green School Drive',
    description: 'Educating children on waste segregation and recycling with interactive workshops and eco-clubs in schools.',
  },
  {
    id: 6,
    icon: '🤝',
    title: 'Community Clean-up Days',
    description: 'Monthly clean-up drives in colonies and public places with volunteers — fostering unity and responsibility.',
  },
  {
    id: 7,
    icon: '♻️',
    title: 'E-Waste Collection Camps',
    description: 'Special campaigns to collect discarded electronics — ensuring safe recycling of harmful components like batteries.',
  },
  {
    id: 8,
    icon: '🚛',
    title: 'Zero Waste Events',
    description: 'Helping organisers run eco-friendly events by managing waste responsibly, from segregation bins to post-event audits.',
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
    y: 50,
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
      duration: 0.6,
    },
  },
}

export default function InitiativesCards() {
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
          {initiatives.map((initiative) => (
            <motion.div
              key={initiative.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className="bg-[#72c28fab] border-2 border-[#22c55e] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden"
            >
              {/* Decorative gradient background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e]/10 rounded-full blur-3xl -z-0"></div>
              
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                  delay: 0.3,
                }}
                className="text-5xl mb-4 relative z-10"
              >
                {initiative.icon}
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-bold text-[#ff7400] mb-3 group-hover:text-[#ff8500] transition-colors">
                  {initiative.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {initiative.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-[#22c55e]/0 group-hover:bg-[#22c55e]/5 transition-colors duration-300 -z-0"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

