'use client'

import React from 'react'
import { motion } from 'framer-motion'

const supportItems = [
  {
    category: 'left',
    items: [
      'Complete operations manual & SOPs',
      'On-site launch & 30-day hand-holding',
      'Digital route app + daily collections dashboard',
      'Access to MRFs & waste buyer networks',
    ],
  },
  {
    category: 'right',
    items: [
      'Co-branded marketing kit (posters, scripts & digital)',
      'Local PR outreach & influencer tie-ups',
      'Leads generation & customer onboarding support',
      'Ongoing operations coaching',
    ],
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

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
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

export default function SupportSection() {
  return (
    <section className="py-16 md:py-20 px-5 bg-gradient-to-b from-[#f6fbf8] to-white">
      <div className="max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#72c28fab] border-2 border-[#22c55e] rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#ff7400] mb-8">
            What we provide — Full support
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {supportItems.map((category, catIdx) => (
              <div key={`category-${catIdx}`} className="space-y-3">
                {category.items.map((item, idx) => (
                  <motion.div
                    key={`category-${catIdx}-item-${idx}`}
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#22c55e] text-xl mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

