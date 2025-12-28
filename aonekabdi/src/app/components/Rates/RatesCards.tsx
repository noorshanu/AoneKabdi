'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface RateItem {
  idKey: string
  sl: number
  name: string
  unit: 'kg' | 'pc'
  rate: number
}

interface RatesCardsProps {
  items: RateItem[]
}

function formatRate(val: number, unit: string) {
  if (unit === 'pc' || unit.toLowerCase().includes('pic') || unit.toLowerCase().includes('piece')) {
    return '₹ ' + Number(val).toLocaleString('en-IN') + '/pc'
  }
  return '₹ ' + Number(val).toLocaleString('en-IN') + ' /kg'
}

export default function RatesCards({ items }: RatesCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, idx) => (
        <motion.div
          key={`rate-card-${item.idKey}-${idx}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.03 }}
          className="bg-white/90 backdrop-blur-lg border-2 border-[#22c55e] rounded-xl p-4 shadow-lg hover:shadow-xl transition-all hover:border-[#16a34a]"
          role="listitem"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="w-12 h-12 rounded-lg bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e] font-black flex-shrink-0">
                {item.sl}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-black text-gray-900 truncate" title={item.name}>
                  {item.name}
                </div>
                <div className="text-sm text-gray-600 mt-1">{item.unit}</div>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div
                data-key={item.idKey}
                className="text-[#22c55e] font-black text-lg"
              >
                {formatRate(item.rate, item.unit)}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}


