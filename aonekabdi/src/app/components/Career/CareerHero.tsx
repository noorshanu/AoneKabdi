'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowDown, FaEnvelope, FaBriefcase } from 'react-icons/fa'

export default function CareerHero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f6fbf8] via-white to-[#f0fdf4] py-20 px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#22c55e]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff7400]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-[#22c55e]/10 text-[#22c55e] rounded-full text-sm font-bold uppercase tracking-wide">
                Join Our Mission
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            >
              <span className="text-[#ff7400]">Work With</span>{' '}
              <span className="text-gray-900">Aone Kabadi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl"
            >
              Join our mission to make India cleaner and promote circular economy. 
              We serve households, businesses and institutions — across scrap collection, 
              segregation, digital reporting and capacity building.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600"
            >
              <strong>Open roles:</strong> Field Executive, Operations Supervisor, Sales &amp; Partnerships, 
              Collection Coordinator, MRF Technician, Digital Admin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <motion.a
                href="#apply-form"
                className="inline-flex items-center gap-2 px-6 py-4 bg-[#22c55e] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaBriefcase />
                Apply Now
                <FaArrowDown className="text-sm" />
              </motion.a>
              <motion.a
                href="mailto:aonekabadi@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-4 bg-white text-gray-900 font-bold rounded-xl border-2 border-[#22c55e] hover:bg-[#22c55e]/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Email HR
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-lg border-2 border-[#22c55e] rounded-2xl p-8 shadow-2xl">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-2xl font-black text-[#22c55e] mb-6"
              >
                Quick Stats
              </motion.h3>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="border-l-4 border-[#ff7400] pl-4"
                >
                  <div className="text-4xl md:text-5xl font-black text-[#ff7400]">5 Cities</div>
                  <div className="text-gray-600 mt-1">Active operations</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 }}
                  className="border-l-4 border-[#22c55e] pl-4"
                >
                  <div className="text-4xl md:text-5xl font-black text-[#22c55e]">500+</div>
                  <div className="text-gray-600 mt-1">Partners</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                  className="border-l-4 border-[#ff7400] pl-4"
                >
                  <div className="text-4xl md:text-5xl font-black text-[#ff7400]">100,000+</div>
                  <div className="text-gray-600 mt-1">Customers</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



