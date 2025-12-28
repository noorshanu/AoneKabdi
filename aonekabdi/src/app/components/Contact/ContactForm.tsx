'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

export default function ContactForm() {
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: null, message: '' })

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycby663b4RX_4AR-441lXRLhBG0r2ed8B5NzoWKF2lS1b7umjTpr6Csfs86r7O7rMSWLI/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      )

      setIsLoading(false)
      setStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.',
      })
      form.reset()

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: null, message: '' })
      }, 5000)
    } catch (error) {
      setIsLoading(false)
      setStatus({
        type: 'error',
        message: 'An error occurred. Please call us directly at +91 7856815038',
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white border-2 border-[#22c55e] rounded-2xl p-6 md:p-8 shadow-xl"
    >
      <h2 className="text-2xl md:text-3xl font-black text-[#ff7400] mb-6">Send us a Message</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="form_id" value="contactForm" />
        <input type="hidden" name="sheetName" value="contactForm" />
        <input type="hidden" name="source" value="contact_page" />
        <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor="name" className="block font-bold text-gray-900 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-bold text-gray-900 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="+91 1234567890"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-bold text-gray-900 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-bold text-gray-900 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us how we can help you..."
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all resize-none"
          />
        </div>

        <AnimatePresence mode="wait">
          {status.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`p-4 rounded-xl flex items-start gap-3 ${
                status.type === 'success'
                  ? 'bg-[#22c55e]/10 text-[#22c55e] border-2 border-[#22c55e]/30'
                  : 'bg-red-50 text-red-700 border-2 border-red-300'
              }`}
              role="alert"
              aria-live="polite"
            >
              {status.type === 'success' ? (
                <FaCheckCircle className="text-xl mt-0.5 flex-shrink-0" />
              ) : (
                <FaExclamationCircle className="text-xl mt-0.5 flex-shrink-0" />
              )}
              <p className="font-semibold">{status.message}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            className="flex-1 px-8 py-4 bg-[#22c55e] text-white font-bold rounded-xl hover:bg-[#16a34a] transition-colors shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <FaSpinner className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </motion.button>
          <motion.button
            type="reset"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setStatus({ type: null, message: '' })}
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-colors"
          >
            Clear
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}

