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

interface RatesTableProps {
  items: RateItem[]
}

function formatRate(val: number, unit: string) {
  if (unit === 'pc' || unit.toLowerCase().includes('pic') || unit.toLowerCase().includes('piece')) {
    return '₹ ' + Number(val).toLocaleString('en-IN') + '/pc'
  }
  return '₹ ' + Number(val).toLocaleString('en-IN') + ' /kg'
}

export default function RatesTable({ items }: RatesTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/90 backdrop-blur-lg border-2 border-[#22c55e] rounded-2xl overflow-hidden shadow-xl"
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" role="table" aria-label="Scrap rates table">
          <thead>
            <tr className="bg-gradient-to-r from-[#22c55e]/10 to-[#16a34a]/10">
              <th className="px-4 py-4 text-left text-[#ff7400] font-black text-sm w-20">SL. No.</th>
              <th className="px-4 py-4 text-left text-[#ff7400] font-black text-sm">Scrap Name</th>
              <th className="px-4 py-4 text-left text-[#ff7400] font-black text-sm">Weight / Unit</th>
              <th className="px-4 py-4 text-right text-[#ff7400] font-black text-sm w-40">Rate</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <motion.tr
                key={`rate-table-${item.idKey}-${idx}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.02 }}
                className="border-b border-gray-100 hover:bg-[#22c55e]/5 transition-colors"
              >
                <td className="px-4 py-4 text-gray-900 font-bold">{item.sl}</td>
                <td className="px-4 py-4 text-gray-900 font-bold">{item.name}</td>
                <td className="px-4 py-4 text-gray-600">{item.unit}</td>
                <td className="px-4 py-4 text-right">
                  <span
                    id={`rate_${item.idKey}`}
                    data-key={item.idKey}
                    className="text-[#22c55e] font-black"
                  >
                    {formatRate(item.rate, item.unit)}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}


