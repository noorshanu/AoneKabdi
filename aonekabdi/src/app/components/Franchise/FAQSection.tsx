'use client'

import React from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'Q: How much capital do I need?',
    a: 'A: Most partners start between ₹0–5L depending on scale and whether they choose the 0 investment path. We provide options to reduce upfront burden.',
  },
  {
    q: 'Q: Do I need prior experience?',
    a: 'A: No. We train for operations, bookkeeping and sales. Many partners were new to waste collection.',
  },
  {
    q: 'Q: How soon can I start?',
    a: 'A: Typical start time is 30–45 days from agreement, faster with ready space. 0-investment partners may start within 45 days depending on approvals.',
  },
  {
    q: 'Q: Is the territory exclusive?',
    a: 'A: We assign territories and top applicants receive priority exclusivity where possible.',
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

const faqVariants = {
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

export default function FAQSection() {
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
            Frequently asked — clear answers
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-4"
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={`faq-${idx}-${faq.q.slice(0, 20)}`}
                variants={faqVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white/80 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <strong className="block text-[#ff7400] mb-2 text-lg">{faq.q}</strong>
                <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

