'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FinalCTA() {
  const scrollToForm = () => {
    const formElement = document.getElementById('franchise-form')
    formElement?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-20 px-5 bg-gradient-to-br from-[#22c55e] via-[#16a34a] to-[#15803d] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-[1180px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              Ready to be a local hero and build a profitable business?
            </h3>
            <p className="text-white/90 text-base md:text-lg">
              Apply now — limited territories this quarter. Early applicants get free marketing for first month.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#22c55e] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-xl"
            >
              Apply Now
            </motion.button>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors inline-block"
              >
                Download Brochure
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

