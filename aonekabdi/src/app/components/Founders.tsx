'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image' // Uncomment when you have actual images

const founders = [
  {
    id: 1,
    name: 'Mr. Monty Jaiswal',
    title: 'Co-Founder & MD',
    description: 'A leader who believes that scrap isn\'t a burden but a renewable asset for communities and the environment. Guided by his mission, Aone Kabadi has grown into a major force connecting households and enterprises to ethical recycling. His commitment to sustainability motivates the entire team to create meaningful change every day.',
    image: '/assets/monty.jpeg', // You'll need to add the actual image
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Mr. Sumit Bardhan Jaiswal',
    title: 'MD & Founder',
    description: 'A forward-looking leader who believes business success and environmental progress must go hand-in-hand. His mission is to make recycling simple, fair, and digitally seamless, ensuring that every citizen can participate in sustainability with ease. With his direction, The Aone Kabadi.',
    image: '/assets/sumit.jpeg', // You'll need to add the actual image
    gradient: 'from-green-500 to-emerald-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
}

export default function Founders() {
  return (
    <section className="py-16 md:py-24 px-5 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#ff7400] mb-4">
            Visionaries
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Visionaries who transformed scrap collection into a national recycling movement. Their leadership is the driving force behind AoneKabadi&apos;s mission to build a Zero-Waste India.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-stretch"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className="relative group h-full"
            >
              {/* Card with different styles for each founder */}
              <div
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-[#22c55e] h-full ${
                  index === 0
                    ? 'flex flex-col lg:flex-row'
                    : 'flex flex-col lg:flex-row-reverse'
                }`}
              >
                {/* Image Section */}
                <div className="relative w-full lg:w-2/5 h-64 lg:h-full overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} opacity-90`} />
                  <div className="relative w-full h-full">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    
                  </div>
                  
                  {/* Decorative overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-3/5 p-6 md:p-8 flex flex-col justify-center flex-1">
                  {/* Name with animated underline */}
                  <motion.h3
                    initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-2xl md:text-3xl font-bold text-[#ff7400] mb-2 relative inline-block"
                  >
                    {founder.name}
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      className="absolute bottom-0 left-0 h-1 bg-[#ff7400]"
                    />
                  </motion.h3>

                  {/* Title */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-base md:text-lg text-gray-600 font-semibold mb-4"
                  >
                    {founder.title}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-sm md:text-base text-gray-700 leading-relaxed"
                  >
                    {founder.description}
                  </motion.p>

                  {/* Decorative element */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className="mt-6 h-1 w-20 bg-gradient-to-r from-green to-orange rounded-full"
                  />
                </div>
              </div>

              {/* Floating accent element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${founder.gradient} rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
