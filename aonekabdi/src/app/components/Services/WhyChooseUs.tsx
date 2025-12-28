'use client'

import React from 'react'
import { motion } from 'framer-motion'

const whyChooseUs = [
  {
    id: 1,
    title: 'How to Buy & Sell Scrap',
    desc: 'Transparent pricing & market insight so you get the best scrap rates every time.',
    icon: '💰',
  },
  {
    id: 2,
    title: 'Segregation Processes',
    desc: 'Source segregation SOPs and scrapyard layout to improve recovery and reduce contamination.',
    icon: '♻️',
  },
  {
    id: 3,
    title: 'Staff Training & Knowledge',
    desc: 'Practical training modules for on-site staff to ensure handling, safety and correct categorisation.',
    icon: '🎓',
  },
  {
    id: 4,
    title: 'Offline & Online Marketing Support',
    desc: 'Local marketing, lead generation and digital presence to increase collections & customers.',
    icon: '📢',
  },
  {
    id: 5,
    title: 'Business Planning & Operations',
    desc: 'Revenue planning, operational SOPs and franchising support to scale operations fast.',
    icon: '📊',
  },
  {
    id: 6,
    title: 'Support & Hand-holding',
    desc: 'From site inspection to commercial operations — we guide you until you\'re profitable.',
    icon: '🤝',
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
    x: -30,
  },
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

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 px-5 bg-gradient-to-b from-white to-[#f6fbf8]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#ff7400] mb-4">
            Why Choose Us
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            We combine field experience with digital processes — training, marketing and hands-on support to make your scrap business profitable.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyChooseUs.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{
                x: 8,
                scale: 1.02,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className="relative p-6 bg-white border-l-4 border-[#22c55e] rounded-xl shadow-md hover:shadow-xl transition-all group"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  delay: 0.3,
                }}
                className="text-4xl mb-4"
              >
                {item.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-[#ff7400] mb-3 group-hover:text-[#ff8500] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {item.desc}
              </p>

              {/* Decorative dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute top-4 right-4 w-3 h-3 bg-[#22c55e] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

