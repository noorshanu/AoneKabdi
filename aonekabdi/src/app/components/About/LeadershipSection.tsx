'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const leaders = [
  {
    id: 1,
    name: 'Mr. Monty Jaiswal',
    role: 'Managing Director',
    image: '/assets/monty.jpeg',
  },
  {
    id: 2,
    name: 'Mr. Sumit Bardhan Jaiswal',
    role: 'Chief Executive Officer',
    image: '/assets/sumit.jpeg',
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

const leaderVariants = {
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
      duration: 0.8,
    },
  },
}

export default function LeadershipSection() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#22c55e] mb-4">
            Founders & Leadership
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            The visionary leaders driving Aone Kabadi&apos;s mission to build a Zero-Waste India
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              variants={leaderVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className="bg-[#72c28fab] border-2 border-[#22c55e] rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all group"
            >
              {/* Image */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  delay: 0.3 + index * 0.2,
                }}
                className="relative w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#22c55e] shadow-xl group-hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                  sizes="224px"
                />
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-black text-[#ff7400] mb-2 group-hover:text-[#ff8500] transition-colors">
                {leader.name}
              </h3>
              <p className="text-lg font-bold text-[#22c55e]">{leader.role}</p>

              {/* Decorative element */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                className="h-1 bg-gradient-to-r from-[#22c55e] to-[#ff7400] rounded-full mx-auto mt-4"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

