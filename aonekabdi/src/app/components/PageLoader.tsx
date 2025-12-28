'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 300)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    // Minimum loading time for smooth experience
    const minLoadTime = setTimeout(() => {
      if (progress >= 100) {
        setIsLoading(false)
      }
    }, 1500)

    return () => {
      clearInterval(interval)
      clearTimeout(minLoadTime)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white z-[99999] flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#f6fbf8] via-white to-[#f6fbf8]"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />

          {/* Floating Orbs */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-[#22c55e]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 bg-[#ff7400]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Logo Container with Multiple Rings */}
            <div className="relative mb-8">
              {/* Outer Rotating Ring */}
              <motion.div
                className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 border-4 border-transparent border-t-[#22c55e] rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              {/* Middle Rotating Ring */}
              <motion.div
                className="absolute inset-2 w-28 h-28 md:w-36 md:h-36 border-4 border-transparent border-r-[#ff7400] rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Inner Pulsing Circle with Logo */}
              <motion.div
                className="absolute inset-6 w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl p-2"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 0 20px rgba(34, 197, 94, 0.3)',
                    '0 0 40px rgba(255, 116, 0, 0.5)',
                    '0 0 20px rgba(34, 197, 94, 0.3)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src="/assets/logo.png"
                    alt="Aone Kabadi Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 64px, 112px"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Sparkle Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: i % 2 === 0 ? '#22c55e' : '#ff7400',
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    x: [
                      0,
                      Math.cos((i / 8) * Math.PI * 2) * 60,
                      Math.cos((i / 8) * Math.PI * 2) * 80,
                    ],
                    y: [
                      0,
                      Math.sin((i / 8) * Math.PI * 2) * 60,
                      Math.sin((i / 8) * Math.PI * 2) * 80,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center mb-4"
            >
              <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#22c55e] to-[#ff7400] bg-clip-text text-transparent mb-2">
                Aone Kabadi
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Transforming waste into opportunity
              </p>
            </motion.div>

            {/* Animated Dots */}
            <motion.div
              className="flex gap-2 justify-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-gradient-to-br from-[#22c55e] to-[#ff7400]"
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
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '280px' }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="relative w-70 md:w-80 h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#22c55e] via-[#ff7400] to-[#22c55e] relative"
                style={{
                  width: `${Math.min(progress, 100)}%`,
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 0%'],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Progress Percentage */}
            <motion.p
              className="mt-4 text-sm font-bold text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

