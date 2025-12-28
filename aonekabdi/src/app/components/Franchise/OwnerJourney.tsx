'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaFileAlt, FaMapMarkedAlt, FaGraduationCap, FaRocket } from 'react-icons/fa'

const steps = [
  {
    id: 1,
    title: 'Step 1 — Apply & territory hold',
    desc: 'We evaluate and reserve territory within 48 hours.',
    icon: FaFileAlt,
  },
  {
    id: 2,
    title: 'Step 2 — On-site assessment',
    desc: 'Launch team visits, helps pick a small operational base and customises your route plan.',
    icon: FaMapMarkedAlt,
  },
  {
    id: 3,
    title: 'Step 3 — Training & pilot',
    desc: '2-week on-site training, tech onboarding and pilot with early customers.',
    icon: FaGraduationCap,
  },
  {
    id: 4,
    title: 'Step 4 — Scale & marketing',
    desc: 'Full launch, local marketing and weekly check-ins until stable.',
    icon: FaRocket,
  },
]

const earnings = [
  { type: 'Small Town', amount: '₹15k–40k / month (net)' },
  { type: 'City Edge', amount: '₹40k–90k / month (net)' },
  { type: 'Metro', amount: '₹90k+ / month (net)' },
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

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function OwnerJourney() {
  return (
    <section className="py-16 md:py-20 px-5 bg-white">
      <div className="max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#72c28fab] border-2 border-[#22c55e] rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#ff7400] mb-8">
            Owner Journey — Clear steps to success
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-4 mb-10"
          >
            {steps.map((step) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="bg-white/80 border border-gray-200 rounded-xl p-5 flex gap-4 items-start hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#22c55e] flex items-center justify-center text-white flex-shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <strong className="block text-[#ff7400] mb-1 text-lg">{step.title}</strong>
                    <p className="text-sm text-gray-700">{step.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="mt-10">
            <h3 className="text-2xl font-black text-[#22c55e] mb-4">Earnings guide (conservative)</h3>
            <p className="text-sm text-gray-700 mb-6">
              Typical net earnings vary by market size. Our partners often see break-even inside 2-4 months and steady monthly profits thereafter.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {earnings.map((earning, idx) => (
                <motion.div
                  key={`earning-${earning.type}-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="bg-white/80 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all"
                >
                  <div className="text-xl font-black text-[#ff7400] mb-2">{earning.type}</div>
                  <div className="text-sm text-gray-700">{earning.amount}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

