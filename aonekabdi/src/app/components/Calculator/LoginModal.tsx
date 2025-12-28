'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLock, FaTimes } from 'react-icons/fa'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

const PASSWORD_HASH = '$2b$10$GC4x72xa00QyMBCB.cD4MuUlKAp0A3u2dIs/.vSf8SAmp/0Bq.9Ga'

export default function LoginModal({ isOpen, onClose, onSuccess }: LoginModalProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setPassword('')
      setError('')
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const pwd = password.trim()
    if (!pwd) {
      setError('Enter password')
      setIsLoading(false)
      return
    }

    // Try to use bcrypt if available, otherwise use direct comparison
    try {
      // Dynamic import bcryptjs (may not work in browser, so we have fallback)
      const bcryptModule = await import('bcryptjs').catch(() => null)

      if (bcryptModule?.default?.compareSync) {
        const ok = bcryptModule.default.compareSync(pwd, PASSWORD_HASH)
        if (ok) {
          setIsLoading(false)
          onSuccess()
          onClose()
          return
        }
      } else if (bcryptModule && typeof (bcryptModule as any).compareSync === 'function') {
        // Handle different import formats
        const ok = (bcryptModule as any).compareSync(pwd, PASSWORD_HASH)
        if (ok) {
          setIsLoading(false)
          onSuccess()
          onClose()
          return
        }
      }

      // Fallback: direct password comparison
      if (pwd === 'Hani@0812' || pwd === '@0825') {
        setIsLoading(false)
        onSuccess()
        onClose()
        return
      }

      setError('Incorrect password')
      setIsLoading(false)
    } catch (err) {
      console.error('Login error:', err)
      // Fallback: direct password comparison
      if (pwd === 'Hani@0812' || pwd === '@0825') {
        setIsLoading(false)
        onSuccess()
        onClose()
        return
      }
      setError('Incorrect password')
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[13000] flex items-center justify-center p-4"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[13001] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border-2 border-[#ff7400]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#ff7400] rounded-lg">
                    <FaLock className="text-white" />
                  </div>
                  <h3 className="text-xl font-black text-[#ff7400]">Admin login</h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <FaTimes className="text-gray-600" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    ref={inputRef}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Admin password"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#ff7400] focus:outline-none focus:ring-2 focus:ring-[#ff7400]/20 transition-all"
                    disabled={isLoading}
                  />
                  {error && (
                    <p className="mt-2 text-sm text-red-600 font-bold" aria-live="polite">
                      {error}
                    </p>
                  )}
                </div>

                <div className="flex gap-3 justify-end">
                  <motion.button
                    type="button"
                    onClick={onClose}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-white border-2 border-[#22c55e] text-[#22c55e] font-bold rounded-xl hover:bg-[#22c55e]/5 transition-all"
                    disabled={isLoading}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white font-black rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Logging in...' : 'Login'}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

