'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function FranchiseForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setIsSuccess(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await fetch('https://script.google.com/macros/s/AKfycby663b4RX_4AR-441lXRLhBG0r2ed8B5NzoWKF2lS1b7umjTpr6Csfs86r7O7rMSWLI/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      })

      setIsLoading(false)
      setIsSuccess(true)
      form.reset()

      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (err) {
      setIsLoading(false)
      setError('Something went wrong. Please try again or call us directly.')
      console.error('Form submission error:', err)
    }
  }

  return (
    <div>
      <h3 className="text-2xl font-black text-[#ff7400] mb-2">Become a Franchisee — Quick Application</h3>
      <p className="text-sm text-gray-700 mb-6">
        Fill this short form and our franchise manager will call you within 48 hours. Prefer WhatsApp? Add your number and we will message you.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="form_id" value="franchiseForm" />
        <input type="hidden" name="sheetName" value="franchiseForm" />
        <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

        <input
          name="name"
          placeholder="Full name"
          required
          autoComplete="off"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
        />
        <input
          name="phone"
          placeholder="Phone"
          required
          autoComplete="off"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          required
          autoComplete="off"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
        />
        <input
          name="city"
          placeholder="City"
          required
          autoComplete="off"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
        />
        <input
          name="state"
          placeholder="State"
          required
          autoComplete="off"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
        />
        <input
          name="space"
          type="number"
          placeholder="Available space (sq. ft.)"
          autoComplete="off"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
        />

        <select
          name="investment"
          aria-label="Investment"
          autoComplete="off"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
        >
          <option value="Minimum 1 Lakh">Minimum 1 Lakh</option>
          <option value="1-5 Lakh">1-5 Lakh</option>
          <option value="5-10 Lakh">5-10 Lakh</option>
          <option value="10-50 Lakh">10-50 Lakh</option>
        </select>

        <textarea
          name="reason"
          placeholder="Why do you want this franchise?"
          rows={4}
          autoComplete="off"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] resize-none"
        />

        {/* Success Message */}
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-[#22c55e]/10 border-2 border-[#22c55e] rounded-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#22c55e] flex items-center justify-center text-white font-bold">✓</div>
              <div>
                <h4 className="font-bold text-[#22c55e]">Application Submitted!</h4>
                <p className="text-sm text-gray-700">We will contact you within 48 hours.</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 border-2 border-red-300 rounded-xl"
          >
            <p className="text-sm text-red-700">{error}</p>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-xl border-none text-white bg-[#22c55e] font-extrabold text-base hover:bg-[#16a34a] transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </button>
      </form>

      <hr className="border-none border-t border-dashed border-gray-300 my-6" />

      <div>
        <h4 className="font-bold text-[#22c55e] mb-3">Why partners choose us</h4>
        <ul className="space-y-2 text-sm text-gray-700 mb-6">
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-1">✓</span>
            <span>High ROI routes designed for daily cashflow</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-1">✓</span>
            <span>Priority access to Material Recovery Facilities (MRFs)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-1">✓</span>
            <span>Brand marketing & digital lead generation</span>
          </li>
        </ul>

        <div className="bg-white/50 rounded-xl p-4 border border-[#22c55e]/20">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-[#22c55e] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              RK
            </div>
            <div>
              <div className="font-bold text-gray-900">Raju Kumar — Ranchi</div>
              <p className="text-sm text-gray-700 italic mt-1">
                &quot;Within 3 months of launching, my route covered break-even. The team&apos;s training and daily tech support are excellent.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

