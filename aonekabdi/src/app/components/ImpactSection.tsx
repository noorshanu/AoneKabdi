'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const impactStats = [
  {
    id: 1,
    icon: '♻️',
    value: 8110504,
    suffix: ' kg',
    label: 'Material Diverted',
    isDecimal: false,
  },
  {
    id: 2,
    icon: '💧',
    value: 13.8,
    suffix: ' Cr L',
    label: 'Water Saved',
    isDecimal: true,
  },
  {
    id: 3,
    icon: '🌳',
    value: 10243,
    suffix: '',
    label: 'Trees Planted',
    isDecimal: false,
  },
]

interface CounterProps {
  target: number
  suffix: string
  isDecimal: boolean
  duration?: number
}

function Counter({ target, suffix, isDecimal, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      if (isDecimal) {
        setCount(target * progress)
      } else {
        setCount(Math.floor(target * progress))
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        if (isDecimal) {
          setCount(target)
        } else {
          setCount(target)
        }
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, target, duration, isDecimal])

  const formatNumber = (num: number) => {
    if (isDecimal) {
      return num.toFixed(1)
    }
    if (num >= 1000) {
      return Math.floor(num).toLocaleString('en-IN')
    }
    return Math.floor(num).toString()
  }

  return (
    <div ref={ref} className="stat">
      <div className="stat-icon">{impactStats.find((s) => s.value === target)?.icon}</div>
      <div className="num">
        <span className="counter-value">{formatNumber(count)}</span>
        <span className="unit">{suffix}</span>
      </div>
    </div>
  )
}

export default function ImpactSection() {
  return (
    <section className="py-16 md:py-20 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#ff7400] mb-4">
            Our Impact
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Building a sustainable future, one pickup at a time
          </p>
          <p className="text-base text-black max-w-2xl mx-auto leading-relaxed">
            Through our comprehensive waste management solutions, we&apos;ve made significant strides in environmental conservation and resource recovery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {impactStats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-3xl mb-5 mx-auto">
                {stat.icon}
              </div>
              <div className="text-center">
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                />
                <div className="text-sm md:text-base font-semibold text-black uppercase tracking-wide mt-3">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 28px;
        }

        .num {
          font-size: clamp(28px, 4vw, 36px);
          font-weight: 900;
          color: #000;
          line-height: 1.1;
          margin-bottom: 8px;
          font-variant-numeric: tabular-nums;
        }

        .num .unit {
          font-size: 0.6em;
          color: #64748b;
          font-weight: 700;
          margin-left: 4px;
        }
      `}</style>
    </section>
  )
}

