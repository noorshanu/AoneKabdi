'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Item {
  id: string
  label: string
  unit: 'kg' | 'pc'
  price: number
}

interface CalculatorItemsProps {
  items: Item[]
  quantities: Record<string, number>
  prices: Record<string, number>
  onQuantityChange: (id: string, quantity: number) => void
}

export default function CalculatorItems({
  items,
  quantities,
  prices,
  onQuantityChange,
}: CalculatorItemsProps) {
  const calculateItemTotal = (id: string) => {
    const qty = quantities[id] || 0
    const price = prices[id] || 0
    return qty * price
  }

  const formatMoney = (n: number) => {
    return '₹ ' + Number(n).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  return (
    <div className="bg-white/90 backdrop-blur-lg border-2 border-[#22c55e] rounded-2xl p-6 shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <small className="text-gray-600 font-bold">Items list (tap values to enter)</small>
        <small className="text-gray-600 font-bold">Auto-calc on input</small>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => {
          const total = calculateItemTotal(item.id)
          const qty = quantities[item.id] || 0

          return (
            <motion.div
              key={`calc-item-${item.id}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.02 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-gray-200 hover:border-[#22c55e] transition-all duration-300"
            >
              <div className="flex-1">
                <div className="font-bold text-gray-900 mb-2">
                  {item.label}{' '}
                  <span className="text-gray-500 text-sm font-normal">({item.unit})</span>
                </div>
                <input
                  type="number"
                  min="0"
                  step={item.unit === 'pc' ? 1 : 0.01}
                  placeholder="0"
                  value={qty || ''}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value) || 0
                    onQuantityChange(item.id, value)
                  }}
                  className="w-full md:w-40 h-12 px-4 text-center rounded-xl border-2 border-[#22c55e] bg-white text-gray-900 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] shadow-[0_0_12px_rgba(43,182,115,0.3)] transition-all"
                />
              </div>

              <div className="text-right min-w-[180px]">
                <div className="text-gray-600 text-sm mb-1">Price</div>
                <div className="font-black text-gray-900 text-base mb-2">
                  {formatMoney(prices[item.id] || 0)}
                  {item.unit === 'pc' ? '/pc' : '/kg'}
                </div>
                <div
                  className={`font-black text-base transition-colors ${
                    total === 0 ? 'text-[#ff7400]' : 'text-gray-900'
                  }`}
                >
                  {formatMoney(total)}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}



