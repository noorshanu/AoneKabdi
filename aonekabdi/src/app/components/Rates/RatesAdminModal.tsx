'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaPlus, FaTrash, FaSave, FaUndo, FaDownload, FaUpload, FaCamera } from 'react-icons/fa'

interface RateItem {
  idKey: string
  sl: number
  name: string
  unit: 'kg' | 'pc'
  rate: number
}

interface RatesAdminModalProps {
  isOpen: boolean
  onClose: () => void
  items: RateItem[]
  onSave: (items: RateItem[]) => void
  onReset: () => void
  onExport: () => void
  onImport: () => void
  onScreenshot: () => void
}

function slugify(text: string): string {
  return String(text)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '') || 'item_' + Date.now()
}

export default function RatesAdminModal({
  isOpen,
  onClose,
  items,
  onSave,
  onReset,
  onExport,
  onImport,
  onScreenshot,
}: RatesAdminModalProps) {
  const [editedItems, setEditedItems] = useState<RateItem[]>(items)

  useEffect(() => {
    if (isOpen) {
      setEditedItems(items)
    }
  }, [isOpen, items])

  const handleItemChange = (index: number, field: keyof RateItem, value: string | number) => {
    const updated = [...editedItems]
    updated[index] = { ...updated[index], [field]: value }
    setEditedItems(updated)
  }

  const handleDelete = (index: number) => {
    const item = editedItems[index]
    if (confirm(`Delete "${item.name}"?`)) {
      setEditedItems(editedItems.filter((_, i) => i !== index))
    }
  }

  const handleAddNew = () => {
    const newItem: RateItem = {
      idKey: 'item_' + Date.now(),
      sl: editedItems.length + 1,
      name: 'New Item',
      unit: 'kg',
      rate: 0,
    }
    setEditedItems([...editedItems, newItem])
  }

  const handleSave = () => {
    const validatedItems = editedItems.map((item, idx) => {
      let id = item.idKey || slugify(item.name)
      const duplicates = editedItems.filter((it) => it.idKey === id)
      if (duplicates.length > 1) {
        id = id + '_' + Date.now() + '_' + idx
      }
      return {
        idKey: id,
        sl: idx + 1,
        name: item.name || 'Unnamed',
        unit: (item.unit || 'kg') as 'kg' | 'pc',
        rate: Number(item.rate) || 0,
      }
    })

    onSave(validatedItems)
    alert('Items & rates saved locally.')
    onClose()
  }

  const handleReset = () => {
    if (confirm('Reset rates to original defaults? This will overwrite local changes.')) {
      onReset()
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[12000] flex items-center justify-center p-4 overflow-auto"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[12001] flex items-center justify-center p-4 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl p-6 max-w-5xl w-full max-h-[92vh] overflow-auto shadow-2xl border border-gray-200">
              <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <h3 className="text-2xl font-black text-gray-900">Admin — Edit Rates & Items</h3>
                <div className="flex gap-2 flex-wrap">
                  <motion.button
                    onClick={handleAddNew}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#22c55e] text-[#22c55e] font-bold rounded-xl hover:bg-[#22c55e]/5 transition-all"
                  >
                    <FaPlus />
                    Add
                  </motion.button>
                  <motion.button
                    onClick={handleReset}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#22c55e] text-[#22c55e] font-bold rounded-xl hover:bg-[#22c55e]/5 transition-all"
                  >
                    <FaUndo />
                    Reset
                  </motion.button>
                  <motion.button
                    onClick={handleSave}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white font-black rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaSave />
                    Save
                  </motion.button>
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all"
                  >
                    <FaTimes />
                    Close
                  </motion.button>
                </div>
              </div>

              <div className="space-y-3 mb-6 max-h-[50vh] overflow-auto pr-2">
                {editedItems.map((item, idx) => (
                  <motion.div
                    key={`admin-rate-${item.idKey}-${idx}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.01 }}
                    className="grid grid-cols-1 md:grid-cols-[2fr_100px_120px_44px] gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200"
                  >
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleItemChange(idx, 'name', e.target.value)}
                      placeholder="Item name"
                      className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                    />
                    <select
                      value={item.unit}
                      onChange={(e) => handleItemChange(idx, 'unit', e.target.value as 'kg' | 'pc')}
                      className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                    >
                      <option value="kg">kg</option>
                      <option value="pc">pc</option>
                    </select>
                    <input
                      type="number"
                      step="0.01"
                      value={item.rate}
                      onChange={(e) => handleItemChange(idx, 'rate', parseFloat(e.target.value) || 0)}
                      placeholder="Rate"
                      className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                    />
                    <button
                      onClick={() => handleDelete(idx)}
                      className="p-2 bg-white border border-gray-300 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete item"
                    >
                      <FaTrash />
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200 flex-wrap gap-4">
                <p className="text-sm text-gray-600">
                  Edit item name, unit (kg/pc), and rate. Changes saved locally to your browser.
                </p>
                <div className="flex gap-2">
                  <motion.button
                    onClick={onExport}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#22c55e] text-[#22c55e] font-bold rounded-xl hover:bg-[#22c55e]/5 transition-all"
                  >
                    <FaDownload />
                    Export
                  </motion.button>
                  <motion.button
                    onClick={onImport}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#22c55e] text-[#22c55e] font-bold rounded-xl hover:bg-[#22c55e]/5 transition-all"
                  >
                    <FaUpload />
                    Import
                  </motion.button>
                  <motion.button
                    onClick={onScreenshot}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#ff7400] text-[#ff7400] font-bold rounded-xl hover:bg-[#ff7400]/5 transition-all"
                  >
                    <FaCamera />
                    Screenshot
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}


