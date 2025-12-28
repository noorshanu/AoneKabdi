'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import FranchiseForm from './FranchiseForm'

export default function FranchiseHero() {
  const [isBadgeAnimated, setIsBadgeAnimated] = useState(false)

  const stats = [
    { num: '5+', label: 'Cities' },
    { num: '500+', label: 'Partners' },
    { num: '50K+', label: 'Households served' },
  ]

  const features = [
    { title: 'End-to-end training', desc: 'Operations, collection & tech' },
    { title: 'Route intelligence', desc: 'Daily schedules & route optimisation' },
    { title: 'Low friction start', desc: 'Plug-and-play model with local support' },
  ]

  const scrollToForm = () => {
    const formElement = document.getElementById('franchise-form')
    formElement?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-12 md:py-16 px-5 bg-gradient-to-br from-white to-[#f6fbf8]">
      <div className="max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#ff7400] mb-4 leading-tight">
            Kickstart Your <span className="text-[#22c55e]">Aone Kabadi Franchise</span> Journey
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Low investment • High returns • Real social impact — join India&apos;s fastest-growing recycling franchise model today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Hero Media */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border-2 border-[#22c55e] shadow-xl">
              <Image
                src="/assets/handshake.jpg"
                alt="Franchise partnership"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </div>

            {/* Investment Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              onViewportEnter={() => setIsBadgeAnimated(true)}
              className="bg-[#72c28fab] border-2 border-[#22c55e] rounded-2xl p-6 flex items-center gap-4"
            >
              <motion.div
                animate={isBadgeAnimated ? { rotate: [0, 360] } : {}}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-[#ff7a1a] via-[#ffd08a] to-[#21a462] flex items-center justify-center text-3xl font-black text-white shadow-2xl flex-shrink-0"
                style={{
                  background: 'conic-gradient(from 200deg at 50% 50%, #ff7a1a, #ffd08a, #21a462, #18ffff, #ff7a1a)',
                  backgroundSize: '200% 200%',
                }}
              >
                1
              </motion.div>
              <div className="flex-1">
                <div className="text-2xl font-black text-[#22c55e] mb-1">INVESTMENT</div>
                <p className="text-sm text-gray-700">
                  Start with <strong>Starting at 1 Lakh investment</strong> — choose our 1 Lakh plan and get started with Aone Kabadi.
                </p>
              </div>
            </motion.div>

            {/* Title & Description */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#ff7400] mb-4">
                Build a Greener Business — Join Aone Kabadi as a Franchise Partner
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Low investment. Predictable income. Real social impact. We give you the systems, the brand, and the customers — you bring the local spirit to grow profitably.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 flex-wrap"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={`franchise-hero-stat-${stat.num}-${idx}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-xl px-6 py-4 text-center min-w-[110px] flex-1"
                >
                  <div className="text-2xl font-black text-[#22c55e]">{stat.num}</div>
                  <div className="text-sm text-gray-700 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <motion.button
                onClick={scrollToForm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#22c55e] text-white font-bold rounded-xl hover:bg-[#16a34a] transition-colors shadow-lg"
              >
                Apply for Franchise
              </motion.button>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-[#22c55e] text-gray-700 font-bold rounded-xl hover:bg-[#22c55e]/10 transition-colors"
              >
                Contact Team
              </Link>
              <p className="text-sm text-gray-600 ml-auto">Exclusive territories available — limited slots each quarter</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={`franchise-hero-feature-${feature.title}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-[#72c28fab] border-2 border-[#22c55e] rounded-xl p-4 text-center"
                >
                  <strong className="block text-[#ff7400] mb-1">{feature.title}</strong>
                  <div className="text-sm text-gray-700">{feature.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            id="franchise-form"
            className="bg-[#72c28fab] border-2 border-[#22c55e] rounded-2xl p-6 md:p-8 shadow-xl sticky top-24"
          >
            <FranchiseForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

