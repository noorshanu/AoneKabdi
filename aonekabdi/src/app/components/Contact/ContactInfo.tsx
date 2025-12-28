'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

const contactItems = [
  {
    id: 1,
    icon: FaMapMarkerAlt,
    title: 'Address',
    content: '101, Mochro, Kasmar Block, Ponda, Jharkhand, 827320',
    link: null,
    color: 'text-red-500',
  },
  {
    id: 2,
    icon: FaPhone,
    title: 'Phone 1',
    content: '+91 7856815038',
    link: 'tel:+917856815038',
    color: 'text-[#22c55e]',
  },
  {
    id: 3,
    icon: FaPhone,
    title: 'Phone 2',
    content: '+91 7903416992',
    link: 'tel:+917903416992',
    color: 'text-[#22c55e]',
  },
  {
    id: 4,
    icon: FaEnvelope,
    title: 'Email',
    content: 'aonekabadi@gmail.com',
    link: 'mailto:aonekabadi@gmail.com',
    color: 'text-blue-500',
  },
  {
    id: 5,
    icon: FaGlobe,
    title: 'Website',
    content: 'www.aonekabadi.com',
    link: 'https://www.aonekabadi.com',
    color: 'text-purple-500',
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

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
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

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-[#72c28fab] to-white border-2 border-[#22c55e] rounded-2xl p-6 md:p-8 shadow-xl"
    >
      <h2 className="text-2xl md:text-3xl font-black text-[#ff7400] mb-2">Get in Touch</h2>
      <p className="text-gray-700 mb-8">We&apos;re here to help! Reach out through any of these channels.</p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="space-y-5"
      >
        {contactItems.map((item) => {
          const IconComponent = item.icon
          const content = item.link ? (
            <Link
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : undefined}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-[#22c55e] hover:text-[#16a34a] hover:underline font-semibold transition-colors"
            >
              {item.content}
            </Link>
          ) : (
            <span className="text-gray-700">{item.content}</span>
          )

          return (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ x: 8, scale: 1.02 }}
              className="flex items-start gap-4 p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 flex items-center justify-center ${item.color} flex-shrink-0 group-hover:border-[#22c55e] transition-colors`}
              >
                <IconComponent className="text-xl" />
              </motion.div>
              <div className="flex-1">
                <strong className="block text-gray-900 mb-1 font-bold">{item.title}</strong>
                <div className="text-base">{content}</div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* WhatsApp CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 pt-8 border-t-2 border-[#22c55e]/20"
      >
        <Link
          href="https://wa.me/917856815038"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-6 py-4 bg-[#25d366] text-white font-bold rounded-xl hover:bg-[#20ba5a] transition-colors shadow-lg hover:shadow-xl group"
        >
          <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
          <span>Chat with us on WhatsApp</span>
        </Link>
      </motion.div>
    </motion.div>
  )
}

