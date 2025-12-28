'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaCalculator, FaTrash, FaLock, FaCamera, FaDownload, FaUpload } from 'react-icons/fa'

interface CalculatorSummaryProps {
  subtotal: number
  discount: number
  tax: number
  grandTotal: number
  onClear: () => void
  onAdminClick: () => void
  onScreenshot: () => void
  onExport: () => void
  onImport: () => void
}

export default function CalculatorSummary({
  subtotal,
  discount,
  tax,
  grandTotal,
  onClear,
  onAdminClick,
  onScreenshot,
  onExport,
  onImport,
}: CalculatorSummaryProps) {
  const formatMoney = (n: number) => {
    return '₹ ' + Number(n).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  const isZero = (value: number) => value === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/90 backdrop-blur-lg border-2 border-[#22c55e] rounded-2xl p-6 shadow-xl sticky top-24"
    >
      <div className="space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="text-gray-600 font-bold">Subtotal</div>
          <div
            className={`font-black text-lg ${isZero(subtotal) ? 'text-[#ff7400]' : 'text-gray-900'}`}
          >
            {formatMoney(subtotal)}
          </div>
        </div>

        {/* Discount */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="text-gray-600 font-bold">Discount (admin)</div>
          <div
            className={`font-black text-lg ${isZero(discount) ? 'text-[#ff7400]' : 'text-gray-900'}`}
          >
            {formatMoney(discount)}
          </div>
        </div>

        {/* Tax */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="text-gray-600 font-bold">GST (18%)</div>
          <div
            className={`font-black text-lg ${isZero(tax) ? 'text-[#ff7400]' : 'text-gray-900'}`}
          >
            {formatMoney(tax)}
          </div>
        </div>

        {/* Grand Total */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="mt-6 p-4 bg-gradient-to-r from-[#22c55e]/10 to-[#16a34a]/10 rounded-xl border-2 border-[#22c55e]/30"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="font-black text-gray-900">Grand Total</div>
            <div
              className={`text-2xl font-black ${isZero(grandTotal) ? 'text-[#ff7400]' : 'text-gray-900'}`}
            >
              {formatMoney(grandTotal)}
            </div>
            <div className="text-sm text-gray-500 font-bold">INR</div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-6">
          <motion.button
            onClick={onClear}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-[#22c55e] text-[#22c55e] font-bold rounded-xl hover:bg-[#22c55e]/5 transition-all"
          >
            <FaTrash />
            Clear
          </motion.button>

          <motion.button
            onClick={onAdminClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white font-black rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <FaLock />
            Admin
          </motion.button>

          <motion.button
            onClick={onScreenshot}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#ff7400] to-[#ea580c] text-white font-black rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <FaCamera />
            Take Screenshot
          </motion.button>

          <div className="grid grid-cols-2 gap-2">
            <motion.button
              onClick={onExport}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-[#22c55e] text-[#22c55e] font-bold rounded-xl hover:bg-[#22c55e]/5 transition-all text-sm"
            >
              <FaDownload />
              Export
            </motion.button>

            <motion.button
              onClick={onImport}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-[#22c55e] text-[#22c55e] font-bold rounded-xl hover:bg-[#22c55e]/5 transition-all text-sm"
            >
              <FaUpload />
              Import
            </motion.button>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Tip: On mobile rotate to landscape for a wider view. Screenshot captures only the entered
          items + grand total.
        </p>
      </div>
    </motion.div>
  )
}



