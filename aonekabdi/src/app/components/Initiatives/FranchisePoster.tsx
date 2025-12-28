'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FranchisePoster() {
  return (
    <section className="py-16 md:py-20 px-5 bg-gradient-to-br from-[#f6fbf8] to-white">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#72c28fab] border-2 border-[#22c55e] rounded-2xl p-6 md:p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-2 bg-[#22c55e] text-white font-bold rounded-xl text-sm shadow-lg">
                  aonekabadi.com
                </span>
                <span className="text-sm text-gray-600 font-semibold">
                  Join & Grow • जुड़ें और बढ़ें
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#ff7400] mb-4 leading-tight">
                Build a sustainable scrap business
              </h1>

              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                Practical training, local operations support and marketing guidance — start with confidence.
              </p>

              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-xl">🔰</span>
                  <span>Free practical training (ऑनलाइन / ऑफलाइन)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">🧭</span>
                  <span>Site setup & SOPs — local support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">📣</span>
                  <span>Marketing & customer acquisition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">📊</span>
                  <span>Monthly reporting & transparent payments</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3 mb-4">
                <motion.a
                  href="tel:+917856815038"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#22c55e] text-white font-bold rounded-xl hover:bg-[#16a34a] transition-colors shadow-lg"
                >
                  📞 CALL NOW • +91 7856815038
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="px-6 py-3 border-2 border-[#22c55e] text-gray-700 font-bold rounded-xl hover:bg-[#22c55e]/10 transition-colors inline-block"
                  >
                    🤝 Join & Learn
                  </Link>
                </motion.div>
              </div>

              <div className="text-sm text-gray-600 space-y-1">
                <p>✔ Verified partners • Support at every step</p>
                <p className="text-[#bfa685]">
                  ✔ Join <strong>Aone Kabadi</strong> and start earning with us.
                </p>
              </div>
            </motion.div>

            {/* Right - Animated SVG */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-[340px] h-[420px] rounded-xl overflow-hidden border-4 border-[#ff6a00]/12 shadow-2xl" style={{ background: 'radial-gradient(circle at 50% 35%, rgba(255,80,10,0.04), rgba(0,0,0,0.28))' }}>
                <svg
                  className="w-[90%] h-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  viewBox="0 0 220 220"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="rg1" cx="50%" cy="40%">
                      <stop offset="0%" stopColor="#fff5dc" stopOpacity="0.95" />
                      <stop offset="25%" stopColor="#ffd79b" stopOpacity="0.8" />
                      <stop offset="60%" stopColor="#ff8a00" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#b71c1c" stopOpacity="0.12" />
                    </radialGradient>
                    <linearGradient id="lg1" x1="0" x2="1">
                      <stop offset="0%" stopColor="#ffd79b" />
                      <stop offset="50%" stopColor="#ff8a00" />
                      <stop offset="100%" stopColor="#b71c1c" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <circle
                    cx="110"
                    cy="80"
                    r="64"
                    fill="url(#rg1)"
                    opacity="0.98"
                    className="animate-pulse"
                  />

                  <g className="animate-spin" style={{ animationDuration: '18s' }} filter="url(#glow)">
                    <g transform="translate(110,110)">
                      <circle
                        r="86"
                        fill="none"
                        stroke="url(#lg1)"
                        strokeWidth="4"
                        strokeOpacity="0.22"
                        strokeDasharray="6 12"
                      />
                      <circle
                        r="64"
                        fill="none"
                        stroke="#ffb56c"
                        strokeWidth="2"
                        strokeOpacity="0.22"
                      />
                      <circle
                        r="42"
                        fill="none"
                        stroke="#ffd79b"
                        strokeWidth="2"
                        strokeOpacity="0.16"
                      />
                    </g>
                  </g>

                  <g transform="translate(110,110)">
                    <g className="animate-pulse" opacity="0.98">
                      <path
                        d="M0,-36 L28,22 L-28,22 Z"
                        fill="url(#lg1)"
                        stroke="#fff1d8"
                        strokeWidth="0.8"
                        strokeOpacity="0.35"
                      />
                      <circle r="18" fill="#fff8ea" opacity="0.95" />
                      <circle r="10" fill="#ffd79b" />
                    </g>
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Bottom Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 pt-6 border-t border-[#22c55e]/20 flex flex-wrap gap-4 items-center"
          >
            <Link
              href="/franchise"
              className="px-4 py-2 bg-gradient-to-r from-[#ff7300] to-[#ff7a22] text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Franchise Info
            </Link>
            <div className="font-bold text-[#ff7400]">क्यों जुड़ें? • Why join?</div>
            <div className="text-gray-600">
              Earn • Learn • Impact — कमाएँ, सीखें और समाज बदलें।
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

