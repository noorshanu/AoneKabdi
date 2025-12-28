'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ContactMap() {
  return (
    <section className="py-12 md:py-16 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#ff7400] mb-2">Find Us</h2>
          <p className="text-base text-gray-700">Visit our location in Bokaro, Jharkhand</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#22c55e]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.1234567890123!2d86.1234567!3d23.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzI0LjQiTiA4NsKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Aone Kabadi Location"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-700 mb-4">
            <strong>101, Mochro, Kasmar Block, Ponda, Jharkhand, 827320</strong>
          </p>
          <a
            href="https://maps.google.com/?q=101,+Mochro,+Kasmar+Block,+Ponda,+Jharkhand,+827320"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#22c55e] text-white font-bold rounded-xl hover:bg-[#16a34a] transition-colors shadow-lg"
          >
            Open in Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  )
}

