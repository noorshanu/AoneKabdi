'use client'

import { useState, useEffect, useRef } from 'react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  formType: 'pickup' | 'franchise'
}

export default function BookingModal({ isOpen, onClose, formType }: BookingModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const prevIsOpenRef = useRef(isOpen)

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Track modal state changes and reset state
  useEffect(() => {
    const wasOpen = prevIsOpenRef.current
    
    if (isOpen && !wasOpen) {
      // Modal just opened - reset states
      setIsLoading(false)
      setIsSuccess(false)
      setError(null)
    } else if (!isOpen && wasOpen) {
      // Modal just closed - reset states
      setIsLoading(false)
      setIsSuccess(false)
      setError(null)
    }
    
    prevIsOpenRef.current = isOpen
  }, [isOpen])

  const [timeSlots, setTimeSlots] = useState<Array<{ value: string; label: string }>>([])

  useEffect(() => {
    // Generate time slots
    const slots: Array<{ value: string; label: string }> = []
    for (let h = 8; h <= 20; h++) {
      for (let m = 0; m < 60; m += 30) {
        const hh24 = h.toString().padStart(2, '0')
        const mm = m.toString().padStart(2, '0')
        const val = `${hh24}:${mm}`
        const period = h < 12 ? 'AM' : 'PM'
        const label = `${(h % 12) || 12}:${mm} ${period}`
        slots.push({ value: val, label })
      }
    }
    setTimeout(() => {
      setTimeSlots(slots)
    }, 0)
  }, [])

  const districts = [
    'Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum',
    'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara',
    'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu',
    'Ramgarh', 'Ranchi', 'Sahebganj', 'Saraikela Kharsawan', 'Simdega', 'West Singhbhum'
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setIsSuccess(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await fetch(form.action, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      })

      // Since we're using no-cors, we can't check the response
      // But we'll assume success if no error is thrown
      setIsLoading(false)
      setIsSuccess(true)
      
      // Reset form
      form.reset()
      
      // Auto close after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        onClose()
      }, 3000)
    } catch (err) {
      setIsLoading(false)
      setError('Something went wrong. Please try again or call us directly.')
      console.error('Form submission error:', err)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-2xl text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="p-6">
          <h3 className="text-2xl font-extrabold text-[#ff7400] mb-6">
            {formType === 'pickup' ? 'Quick Booking' : 'Franchise Application'}
          </h3>

          {/* Success Message */}
          {isSuccess && (
            <div className="mb-6 p-4 bg-[#22c55e]/10 border-2 border-[#22c55e] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#22c55e] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#22c55e] mb-1">
                    {formType === 'pickup' ? 'Pickup Request Submitted!' : 'Application Submitted!'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {formType === 'pickup' 
                      ? 'We\'ll contact you soon to confirm your pickup schedule.'
                      : 'We\'ll review your application and get back to you within 24 hours.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">✕</span>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-1">Submission Failed</h4>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {!isSuccess && formType === 'pickup' ? (
            <form
              key={`pickup-${isOpen}`}
              onSubmit={handleSubmit}
              action="https://script.google.com/macros/s/AKfycby663b4RX_4AR-441lXRLhBG0r2ed8B5NzoWKF2lS1b7umjTpr6Csfs86r7O7rMSWLI/exec"
              className="space-y-4"
            >
              <input type="hidden" name="form_id" value="pickupForm" />
              <input type="hidden" name="sheetName" value="pickupForm" />
              <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label className="block font-bold text-[#ff7400] mb-1.5 text-sm" htmlFor="modal-name">
                  Full name
                </label>
                <input
                  id="modal-name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green"
                  placeholder="Full name"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-[#ff7400] mb-1.5 text-sm" htmlFor="modal-phone">
                  Phone number
                </label>
                <input
                  id="modal-phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green"
                  placeholder="+91 9XXXXXXXXX"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-[#ff7400] mb-1.5 text-sm" htmlFor="modal-category">
                  Select item type
                </label>
                <select
                  id="modal-category"
                  name="category"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green"
                  required
                >
                  <option value="">Select item type</option>
                  <option value="household">Household</option>
                  <option value="e-waste">E-waste</option>
                  <option value="metal">Metal</option>
                  <option value="books">Books</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#ff7400] mb-1.5 text-sm" htmlFor="modal-area">
                  District
                </label>
                <select
                  id="modal-area"
                  name="area"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green"
                  required
                >
                  <option value="">Select district</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#ff7400] mb-1.5 text-sm" htmlFor="modal-address">
                    Full Address
                  </label>
                  <input
                    id="modal-address"
                    name="currentLocation"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green"
                    placeholder="Enter address"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#ff7400] mb-1.5 text-sm" htmlFor="modal-pincode">
                    Pincode
                  </label>
                  <input
                    id="modal-pincode"
                    name="pincode"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green"
                    placeholder="Pincode"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#ff7400] mb-1.5 text-sm" htmlFor="modal-date">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    id="modal-date"
                    name="date"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#ff7400] mb-1.5 text-sm" htmlFor="modal-time">
                    Pickup Time
                  </label>
                  <select
                    id="modal-time"
                    name="time"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green"
                    required
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <input type="hidden" name="source" value="home_pickup_modal" />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl border-none text-white bg-[#22c55e] font-extrabold text-base hover:bg-[#16a34a] transition-all shadow-[0_4px_12px_rgba(34,197,94,0.2)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                  'Request Pickup'
                )}
              </button>
            </form>
          ) : !isSuccess ? (
            <form
              key={`franchise-${isOpen}`}
              onSubmit={handleSubmit}
              action="https://script.google.com/macros/s/AKfycby663b4RX_4AR-441lXRLhBG0r2ed8B5NzoWKF2lS1b7umjTpr6Csfs86r7O7rMSWLI/exec"
              className="space-y-4"
            >
              <input type="hidden" name="form_id" value="franchiseForm" />
              <input type="hidden" name="sheetName" value="franchiseForm" />
              <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="name" placeholder="Full name" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green" required />
                <input name="phone" placeholder="Phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green" required />
              </div>
              <input name="email" type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green" required />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="age" type="number" placeholder="Age" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green" required />
                <select name="gender" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green">
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="city" placeholder="City / Location" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green" required />
                <input name="state" placeholder="State" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green" required />
              </div>
              <select name="property" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green">
                <option value="">Do you own or rent property?</option>
                <option value="Own">Own</option>
                <option value="Rent">Rent</option>
              </select>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="space" type="number" placeholder="Available space (sq. ft.)" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green" required />
                <select name="investment" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green">
                  <option value="">Investment Capacity</option>
                  <option value="1-lakh">1 Lakh</option>
                  <option value="1-5-lakh">1-5 Lakh</option>
                  <option value="5-10-lakh">5-10 Lakh</option>
                  <option value="above-10-lakh">Above 10 Lakh</option>
                </select>
              </div>
              <select name="assistance" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green">
                <option value="">Need financial assistance?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <textarea name="reason" placeholder="Why do you want this franchise?" rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green" required />
              <textarea name="experience" placeholder="Prior business experience (if any)" rows={2} className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-deep focus:outline-none focus:ring-2 focus:ring-green" />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl border-none text-white bg-[#22c55e] font-extrabold text-base hover:bg-[#16a34a] transition-all shadow-[0_4px_12px_rgba(34,197,94,0.2)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                  'Apply for Franchise'
                )}
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  )
}

