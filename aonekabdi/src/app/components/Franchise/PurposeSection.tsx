'use client'

import React from 'react'
import { motion } from 'framer-motion'

const pros = [
  {
    category: 'left',
    items: [
      { title: 'Belonging & Status', desc: "You're not alone — join a community of 500+ partners and get noticed as the local sustainability leader." },
      { title: 'Certainty', desc: 'Predictable daily cash flows, clear SOPs and an easy-to-follow business playbook.' },
      { title: 'Recognition', desc: 'Co-branding, PR support, and certificates that win local trust.' },
      { title: 'Social Proof', desc: 'Visible metrics, testimonials and neighbourhood references to accelerate customer onboarding.' },
    ],
  },
  {
    category: 'right',
    items: [
      { title: 'Scarcity', desc: 'We assign exclusive territories — early applicants lock better routes and higher margins.' },
      { title: 'Ease', desc: 'Start in 30 days with our launch team handling setup, training and first customers.' },
      { title: 'Authority', desc: 'Our operations are validated by partnerships and MRF connections — we open doors you would struggle to open alone.' },
      { title: 'Momentum', desc: 'You get marketing packs and digital leads so demand exists from day one.' },
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
  hidden: { opacity: 0, y: 20 },
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

export default function PurposeSection() {
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
          <h2 className="text-3xl md:text-4xl font-black text-[#ff7400] mb-4">
            More than business — it&apos;s purpose with profit
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-3xl">
            People remember the brands that make their city cleaner. As a franchise partner you do well by doing good: steady revenue while delivering a real local impact. Here are the psychological levers that make this model powerful for entrepreneurs:
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {pros.map((category, catIdx) => (
              <div key={`pro-category-${catIdx}`} className="space-y-4">
                {category.items.map((item, idx) => (
                  <motion.div
                    key={`pro-category-${catIdx}-item-${idx}`}
                    variants={itemVariants}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="bg-white/80 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all"
                  >
                    <strong className="block text-[#ff7400] mb-2 text-lg">{item.title}</strong>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
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

