'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function FoundersMessage() {
  return (
    <section className="py-16 md:py-20 px-5 bg-gradient-to-br from-[#72c28fab] to-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border-2 border-[#22c55e] rounded-2xl p-8 md:p-10 shadow-2xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-black text-[#ff7400] mb-6 text-center"
          >
            Founders Message
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed"
          >
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl italic text-center text-[#ff7400] font-bold mb-8 border-l-4 border-[#22c55e] pl-6 py-4 bg-[#22c55e]/5 rounded-r-xl"
            >
              &ldquo;Waste isn&apos;t an end — it&apos;s the start of something valuable.&rdquo;
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg"
            >
              When Mr. Monty Jaiswal and Mr. Sumit Bardhan Jaiswal started Aone Kabadi in 2025, they didn&apos;t set out to chase convenience or profits — they set out to change how people see waste. What began as collecting household scrap quickly became a mission: to turn discarded things into dependable value, opportunity, and livelihood.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg"
            >
              By blending simple fieldwork with practical technology, they made it effortless for thousands of households to sell scrap fairly and transparently. From doorstep pickups to digitised receipts, Aone Kabadi grew from a local helper into a trusted partner for homes, businesses, institutions — and even government programs like EPR and MRF planning.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-base md:text-lg"
            >
              Today we&apos;re not just collectors. We design solutions: fair pricing, secure handling, measurable impact, and opportunities for communities to earn while helping the planet. Our aim is simple — make circular living easy, profitable and dignified for everyone we touch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-center mt-8 pt-6 border-t border-[#22c55e]/20"
            >
              <p className="text-xl font-bold text-[#ff7400]">
                — Monty Jaiswal & Sumit Bardhan Jaiswal
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

