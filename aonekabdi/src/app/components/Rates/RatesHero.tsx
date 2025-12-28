'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaTable, FaTh, FaLock } from 'react-icons/fa'

interface RatesHeroProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  viewMode: 'table' | 'cards'
  onViewModeChange: (mode: 'table' | 'cards') => void
  onAdminClick: () => void
}

export default function RatesHero({
  searchTerm,
  onSearchChange,
  viewMode,
  onViewModeChange,
  onAdminClick,
}: RatesHeroProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 flex items-center gap-4"
        >
          <span
            className="w-2 md:w-3 h-12 md:h-14 bg-gradient-to-b from-[#ff7400] to-[#ff8533] rounded-lg shadow-lg"
            aria-hidden="true"
          />
          <span className="flex flex-col">
            <span className="text-sm md:text-base text-gray-600 font-bold uppercase tracking-wider mb-2">
              Current • Rates
            </span>
            <span className="text-[#ff7400]">See Scrap Rates</span>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-base md:text-lg max-w-2xl mt-4"
        >
          Rates below are editable from your Admin. Use the search and view toggle to explore
          available.
        </motion.p>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        {/* Search */}
        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search items (e.g. 'Iron')"
            className="bg-transparent border-none outline-none text-gray-900 w-40 md:w-48 focus:w-52 transition-all"
            aria-label="Search rates"
          />
        </div>

        {/* View Toggle */}
        <div className="flex gap-2 bg-white border border-gray-200 rounded-xl p-1">
          <motion.button
            onClick={() => onViewModeChange('table')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${
              viewMode === 'table'
                ? 'bg-[#22c55e] text-white shadow-lg'
                : 'bg-transparent text-gray-700 hover:bg-gray-100'
            }`}
            title="Table view"
          >
            <FaTable />
            Table
          </motion.button>
          <motion.button
            onClick={() => onViewModeChange('cards')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${
              viewMode === 'cards'
                ? 'bg-[#22c55e] text-white shadow-lg'
                : 'bg-transparent text-gray-700 hover:bg-gray-100'
            }`}
            title="Cards view"
          >
            <FaTh />
            Cards
          </motion.button>
        </div>

        {/* Admin Button */}
        <motion.button
          onClick={onAdminClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white font-black rounded-xl shadow-lg hover:shadow-xl transition-all"
          title="Open Admin"
        >
          <FaLock />
          Admin
        </motion.button>
      </div>
    </div>
  )
}


