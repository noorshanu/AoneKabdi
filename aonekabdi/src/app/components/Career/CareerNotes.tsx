'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaInfoCircle } from 'react-icons/fa'

export default function CareerNotes() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-[#fff7ed] to-[#ffedd5] border-2 border-[#ff7400] rounded-2xl p-6 md:p-8 shadow-lg"
    >
      <div className="flex items-start gap-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="p-3 bg-[#ff7400] rounded-xl text-white flex-shrink-0"
        >
          <FaInfoCircle className="text-2xl" />
        </motion.div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-black text-[#ff7400] mb-4">
            Hiring & Operations — Quick Notes
          </h3>
          <ul className="space-y-3 text-gray-700">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-3"
            >
              <span className="text-[#ff7400] font-bold">•</span>
              <span>
                Field & operations roles may require travel and physical handling of scrap. Safety training is provided.
              </span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-3"
            >
              <span className="text-[#ff7400] font-bold">•</span>
              <span>
                We prioritize local candidates for collection & community roles to ensure quicker response time.
              </span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-3"
            >
              <span className="text-[#ff7400] font-bold">•</span>
              <span>
                Selected candidates will undergo orientation and capacity building sessions as part of onboarding.
              </span>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.section>
  )
}



