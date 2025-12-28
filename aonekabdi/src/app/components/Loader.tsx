'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// This component is kept for reference but PageLoader is the main one being used

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-[99999] flex items-center justify-center">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f6fbf8] via-white to-[#f6fbf8] opacity-50" />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo/Brand Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 border-4 border-transparent border-t-[#22c55e] border-r-[#ff7400] rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-2 border-4 border-transparent border-b-[#22c55e] border-l-[#ff7400] rounded-full"
            />
            
            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center p-3">
              <div className="relative w-20 h-20 md:w-24 md:h-24">
                <Image
                  src="/assets/logo.png"
                  alt="Aone Kabadi Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, 96px"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-black text-[#ff7400] mb-2">
            Aone Kabadi
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Loading your experience...
          </p>
          
          {/* Animated Dots */}
          <div className="flex gap-2 justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-[#22c55e]"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 w-64 md:w-80 h-2 bg-gray-200 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#22c55e] via-[#ff7400] to-[#22c55e]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 100%',
            }}
          />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? '#22c55e' : '#ff7400',
              opacity: 0.6,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

