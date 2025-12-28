'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaPlus, FaTrash, FaSave, FaUndo } from 'react-icons/fa'

interface Item {
  id: string
  label: string
  unit: 'kg' | 'pc'
  price: number
}

interface AdminModalProps {
  isOpen: boolean
  onClose: () => void
  items: Item[]
  discount: number
  tax: number
  onSave: (items: Item[], discount: number, tax: number) => void
  onReset: () => void
}

function slugify(text: string): string {
  return String(text)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '') || 'item_' + Date.now()
}

export default function AdminModal({
  isOpen,
  onClose,
  items,
  discount,
  tax,
  onSave,
  onReset,
}: AdminModalProps) {
  const [editedItems, setEditedItems] = useState<Item[]>(items)
  const [editedDiscount, setEditedDiscount] = useState(discount)
  const [editedTax, setEditedTax] = useState(tax)

  useEffect(() => {
    if (isOpen) {
      setEditedItems(items)
      setEditedDiscount(discount)
      setEditedTax(tax)
    }
  }, [isOpen, items, discount, tax])

  const handleItemChange = (index: number, field: keyof Item, value: string | number) => {
    const updated = [...editedItems]
    updated[index] = { ...updated[index], [field]: value }
    setEditedItems(updated)
  }

  const handleDelete = (index: number) => {
    const item = editedItems[index]
    if (confirm(`Delete "${item.label}"?`)) {
      setEditedItems(editedItems.filter((_, i) => i !== index))
    }
  }

  const handleAddNew = () => {
    const newItem: Item = {
      id: 'item_' + Date.now(),
      label: 'New Item',
      unit: 'kg',
      price: 0,
    }
    setEditedItems([...editedItems, newItem])
  }

  const handleSave = () => {
    // Ensure unique IDs
    const validatedItems = editedItems.map((item, idx) => {
      let id = item.id || slugify(item.label)
      // Check for duplicates
      const duplicates = editedItems.filter((it) => it.id === id)
      if (duplicates.length > 1) {
        id = id + '_' + Date.now() + '_' + idx
      }
      return {
        id,
        label: item.label || 'Unnamed',
        unit: item.unit || 'kg',
        price: Number(item.price) || 0,
      }
    })

    onSave(validatedItems, Number(editedDiscount) || 0, Number(editedTax) || 0)
    alert('Items & prices saved locally. To persist server-side, call an API from here.')
    onClose()
  }

  const handleReset = () => {
    if (confirm('Reset items and prices to original defaults? This will overwrite local changes.')) {
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1200] flex items-center justify-center p-4"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[1201] flex items-center justify-center p-4 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gray-900 text-white rounded-2xl p-6 max-w-4xl w-full max-h-[92vh] overflow-auto shadow-2xl border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black text-white">Admin — Edit Prices & Items</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <FaTimes className="text-white" />
                </button>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <motion.button
                  onClick={handleAddNew}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
                >
                  <FaPlus />
                  Add Item
                </motion.button>
                <motion.button
                  onClick={handleReset}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
                >
                  <FaUndo />
                  Reset Defaults
                </motion.button>
                <motion.button
                  onClick={handleSave}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white font-black rounded-xl shadow-lg hover:shadow-xl transition-all ml-auto"
                >
                  <FaSave />
                  Save
                </motion.button>
              </div>

              <div className="space-y-3 mb-6 max-h-[50vh] overflow-auto pr-2">
                {editedItems.map((item, idx) => (
                  <motion.div
                    key={`admin-item-${item.id}-${idx}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.02 }}
                    className="grid grid-cols-1 md:grid-cols-[2fr_80px_100px_44px] gap-3 p-4 rounded-lg bg-gray-800 border border-white/5"
                  >
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) => handleItemChange(idx, 'label', e.target.value)}
                      placeholder="Item name (visible)"
                      className="px-3 py-2 bg-gray-700 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                    />
                    <select
                      value={item.unit}
                      onChange={(e) => handleItemChange(idx, 'unit', e.target.value as 'kg' | 'pc')}
                      className="px-3 py-2 bg-gray-700 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                    >
                      <option value="kg">kg</option>
                      <option value="pc">pc</option>
                    </select>
                    <input
                      type="number"
                      step="0.01"
                      value={item.price}
                      onChange={(e) => handleItemChange(idx, 'price', parseFloat(e.target.value) || 0)}
                      placeholder="Price"
                      className="px-3 py-2 bg-gray-700 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                    />
                    <button
                      onClick={() => handleDelete(idx)}
                      className="p-2 bg-gray-700 border border-white/10 text-gray-400 hover:text-red-400 hover:bg-gray-600 rounded-lg transition-colors"
                      title="Delete item"
                    >
                      <FaTrash />
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Discount (flat)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={editedDiscount}
                    onChange={(e) => setEditedDiscount(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-gray-700 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">GST %</label>
                  <input
                    type="number"
                    step="0.01"
                    value={editedTax}
                    onChange={(e) => setEditedTax(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-gray-700 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                  />
                </div>
              </div>

              <p className="mt-4 text-gray-400 text-sm">
                Prices and item list are stored locally (localStorage). For a real admin panel, call
                your server API from here to persist centrally.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}



