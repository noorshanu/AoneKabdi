'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesHero() {
  const features = [
    { icon: '📦', text: 'Free doorstep pickup' },
    { icon: '📊', text: 'Digitised transparent reports' },
    { icon: '🤝', text: 'Franchise & onboarding' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section className="py-16 md:py-24 px-5 bg-gradient-to-br from-[#f6fbf8] to-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-[#ff7400] mb-3 inline-block px-3 py-1 bg-[#ff7400]/10 rounded-full"
            >
              Premium Services
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-deep mb-6 leading-tight"
            >
              End-to-End Scrap & Waste Management Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted mb-8 leading-relaxed"
            >
              Doorstep pickup, MRF & scrapyard consulting, training, digitised reporting and franchise support — built to be compliant, profitable and sustainable.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="tel:+917856815038"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#22c55e] text-white font-bold rounded-xl hover:bg-[#16a34a] transition-colors shadow-lg hover:shadow-xl"
              >
                📞 Call Now • +91 7856815038
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/franchise"
                  className="px-8 py-4 border-2 border-[#22c55e] text-[#22c55e] font-bold rounded-xl hover:bg-[#22c55e]/10 transition-colors inline-block"
                >
                  Franchise & Training
                </Link>
              </motion.div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={`services-hero-feature-${feature.text}-${idx}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-md border border-gray-100"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-sm font-semibold text-deep">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#22c55e]/20 to-[#16a34a]/10 rounded-3xl blur-2xl"></div>
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/assets/service.png"
                  alt="Aone Kabadi support & training"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

