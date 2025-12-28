'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaRecycle } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { BsCheckCircleFill } from 'react-icons/bs'
import { MdFactory } from 'react-icons/md'

const services = [
  {
    id: 1,
    title: 'Scrap Collection',
    description: 'Door-to-door pickup for 40+ recyclables including metal, plastic, paper, and e-waste with instant pricing.',
    icon: <FaRecycle className="w-12 h-12" />,
  },
  {
    id: 2,
    title: 'Document Shredding',
    description: 'Secure shredding for businesses and institutions with certified destruction and compliance documentation.',
    icon: <HiDocumentText className="w-12 h-12" />,
  },
  {
    id: 3,
    title: 'EPR Services',
    description: 'Official PRO & EPR compliance support helping brands meet extended producer responsibility requirements.',
    icon: <BsCheckCircleFill className="w-12 h-12" />,
  },
  {
    id: 4,
    title: 'MRF & Consulting',
    description: 'Material recovery facility partnerships and consulting for efficient waste processing and resource recovery.',
    icon: <MdFactory className="w-12 h-12" />,
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

const iconVariants = {
  hidden: {
    scale: 0,
    rotate: -180,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
}

export default function Ourservices() {
  return (
    <section className="py-16 md:py-20 px-5 bg-[#fafafa]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#ff7400] mb-3">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive waste management solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service) => (
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
              className="bg-white rounded-xl p-6 md:p-7 shadow-md hover:shadow-2xl transition-shadow duration-300 border-2 border-[#22c55e] group cursor-pointer"
            >
              {/* Icon Container */}
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 md:w-20 md:h-20 bg-green rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg"
              >
                <div className="text-[#22c55e]">
                  {service.icon}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-[#ff7400] mb-3 group-hover:text-[#ff8500] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Element */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                className="h-1 bg-gradient-to-r from-green to-orange mt-4 rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
