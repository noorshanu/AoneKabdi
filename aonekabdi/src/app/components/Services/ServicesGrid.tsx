'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaRecycle, FaBuilding, FaCar, FaCheckCircle, FaFileAlt, FaIndustry } from 'react-icons/fa'

const services = [
  {
    id: 1,
    title: 'Scrap Collection',
    desc: 'Free doorstep pickup for households & businesses — secure weighing, fair pricing and instant payment.',
    icon: FaRecycle,
  },
  {
    id: 2,
    title: 'Zero Waste Society',
    desc: 'Design & implement segregation systems for societies and gated communities with training & monitoring.',
    icon: FaBuilding,
  },
  {
    id: 3,
    title: 'Vehicle Scrapping',
    desc: 'Compliant end-to-end vehicle decommissioning services including documentation & disposal.',
    icon: FaCar,
  },
  {
    id: 4,
    title: 'EPR / PRO Services',
    desc: 'Extended Producer Responsibility (EPR) facilitation and collection services for manufacturers.',
    icon: FaCheckCircle,
  },
  {
    id: 5,
    title: 'Shredding & Secure Disposal',
    desc: 'Secure shredding and disposal of sensitive materials for institutions and enterprises.',
    icon: FaFileAlt,
  },
  {
    id: 6,
    title: 'MRF Consulting',
    desc: 'Material Recovery Facility design, partnerships and operational optimisation consulting.',
    icon: FaIndustry,
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

export default function ServicesGrid() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#ff7400] mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            Comprehensive waste management solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
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
                className="bg-white border-2 border-[#22c55e] rounded-2xl p-6 md:p-7 shadow-lg hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e]/5 rounded-full blur-3xl -z-0"></div>
                
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2,
                  }}
                  className="relative z-10 w-16 h-16 bg-[#22c55e] rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg"
                >
                  <IconComponent className="w-8 h-8" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-deep mb-3 group-hover:text-[#ff7400] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Animated underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-5 h-1 w-full bg-gradient-to-r from-[#22c55e] to-[#ff7400] rounded-full"
                  />
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-[#22c55e]/0 group-hover:bg-[#22c55e]/5 transition-colors duration-300 -z-0"></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

