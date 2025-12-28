'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaFileUpload, FaCalculator, FaCalendarCheck, FaMoneyBillWave } from 'react-icons/fa'

const steps = [
  {
    id: 1,
    num: '01.',
    title: 'Submit Your Inquiry',
    description: 'Share details and photos of your scrap.',
    icon: FaFileUpload,
  },
  {
    id: 2,
    num: '02.',
    title: 'Get Instant Valuation',
    description: 'Receive a quick, fair quote for your scrap.',
    icon: FaCalculator,
  },
  {
    id: 3,
    num: '03.',
    title: 'Book Pickup',
    description: 'Schedule a convenient pickup time and location.',
    icon: FaCalendarCheck,
  },
  {
    id: 4,
    num: '04.',
    title: 'Get Paid Instantly',
    description: 'Immediate payment via UPI, bank transfer, or cash.',
    icon: FaMoneyBillWave,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const stepVariants = {
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

export default function StepsSection() {
  return (
    <section className="py-16 md:py-20 px-5 bg-gradient-to-b from-[#f6fbf8] to-white">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#72c28fab] border-2 border-[#22c55e] rounded-2xl p-6 md:p-8 shadow-2xl"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    transition: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  className="bg-white/10 border border-[#22c55e] rounded-xl p-6 text-center relative"
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      delay: 0.3,
                    }}
                    className="w-20 h-20 mx-auto mb-4 bg-[#22c55e] rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                {/* Number */}
                <div className="text-3xl font-black text-[#22c55e] mb-2">{step.num}</div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-[#22c55e] mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
              )
            })}
          </motion.div>

          {/* Decorative Wave */}
          <motion.svg
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full mt-8 h-24"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="wgrad2" x1="0" x2="1">
                <stop offset="0%" stopColor="#ffb56c" />
                <stop offset="60%" stopColor="#ff8a00" />
                <stop offset="100%" stopColor="#f44f2f" />
              </linearGradient>
            </defs>
            <path
              d="M0 60 C150 0 350 120 500 60 C650 0 850 120 1000 60"
              fill="none"
              stroke="url(#wgrad2)"
              strokeWidth="4"
              strokeDasharray="8 12"
              strokeLinecap="round"
              opacity="0.9"
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  )
}

