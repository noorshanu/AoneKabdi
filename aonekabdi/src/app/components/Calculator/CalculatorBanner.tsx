'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function CalculatorBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-[#f6fbf8] via-white to-[#f0fdf4] py-8 md:py-12"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center tracking-wide"
        >
          <span className="text-gray-900">SCRAP</span>{' '}
          <span className="text-[#22c55e]">CALCULATOR</span>
        </motion.h1>
      </div>
    </motion.div>
  )
}


