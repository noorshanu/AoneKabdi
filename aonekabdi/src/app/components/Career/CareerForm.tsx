'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSpinner, FaCheckCircle, FaExclamationCircle, FaFileAlt } from 'react-icons/fa'

const educationOptions = [
  'Non-Metric',
  'Metric / 10th',
  '12th / Higher Secondary',
  'Diploma',
  'ITI',
  'B.Sc',
  'B.Com',
  'BA',
  'B.Tech / BE',
  'Other',
]

const experienceOptions = [
  { value: 'fresher', label: 'Fresher' },
  { value: '0-1', label: '0-1 year' },
  { value: '1-3', label: '1-3 years' },
  { value: '3-5', label: '3-5 years' },
  { value: '5+', label: '5+ years' },
]

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
]

export default function CareerForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  })
  const [selectedEducation, setSelectedEducation] = useState<string[]>([])

  const handleEducationChange = (value: string) => {
    setSelectedEducation((prev) =>
      prev.includes(value) ? prev.filter((e) => e !== value) : [...prev, value]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: null, message: '' })

    const form = e.currentTarget
    const formData = new FormData(form)

    // Add education checkboxes
    selectedEducation.forEach((edu) => {
      formData.append('education[]', edu)
    })

    // Generate submission ID
    const submissionId = `career-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    formData.append('submission_id', submissionId)
    formData.append('form_id', 'careerForm')
    formData.append('sheetName', 'careerForm')
    formData.append('source', 'career_page')

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
        message: 'Thank you — your application has been submitted. We will contact shortlisted candidates within 7–10 business days.',
      })
      form.reset()
      setSelectedEducation([])

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: null, message: '' })
      }, 5000)
    } catch (error) {
      setIsLoading(false)
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again or email us directly at aonekabadi@gmail.com',
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white border-2 border-[#22c55e] rounded-2xl p-6 md:p-8 shadow-2xl sticky top-24"
      id="apply-form"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-lg">
            <FaFileAlt className="text-white text-xl" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-[#ff7400]">Apply for a Role</h3>
        </div>
        <p className="text-gray-600 text-sm">
          Fill the form below. We review applications in 7-10 business days.
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot */}
        <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

        {/* Full Name */}
        <div>
          <label htmlFor="full_name" className="block font-bold text-[#ff7400] mb-2">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            placeholder="Your full name"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block font-bold text-[#ff7400] mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91xxxxxxxxxx"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-bold text-[#ff7400] mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@domain.com"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          />
        </div>

        {/* DOB and Gender Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="dob" className="block font-bold text-[#ff7400] mb-2">
              Date of birth
            </label>
            <input
              id="dob"
              name="dob"
              type="text"
              placeholder="DD/MM/YYYY"
              autoComplete="off"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block font-bold text-[#ff7400] mb-2">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              autoComplete="off"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
            >
              <option value="">Select</option>
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block font-bold text-[#ff7400] mb-2">
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="City, State, PIN"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          />
        </div>

        {/* Education Checkboxes */}
        <div>
          <label className="block font-bold text-[#ff7400] mb-3">
            Education (select all that apply)
          </label>
          <div className="grid grid-cols-2 gap-2">
            {educationOptions.map((edu) => (
              <label
                key={`edu-${edu}`}
                className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <input
                  type="checkbox"
                  value={edu}
                  checked={selectedEducation.includes(edu)}
                  onChange={() => handleEducationChange(edu)}
                  className="w-4 h-4 text-[#22c55e] border-gray-300 rounded focus:ring-[#22c55e]"
                />
                <span className="text-sm text-gray-700">{edu}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Highest Degree */}
        <div>
          <label htmlFor="highest_degree" className="block font-bold text-[#ff7400] mb-2">
            Highest degree <span className="text-red-500">*</span>
          </label>
          <select
            id="highest_degree"
            name="highest_degree"
            required
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          >
            <option value="">Select highest degree</option>
            {educationOptions.map((edu) => (
              <option key={edu} value={edu.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                {edu}
              </option>
            ))}
          </select>
        </div>

        {/* Specialization */}
        <div>
          <label htmlFor="specialization" className="block font-bold text-[#ff7400] mb-2">
            Specialization / Major (if any)
          </label>
          <input
            id="specialization"
            name="specialization"
            type="text"
            placeholder="e.g. Mechanical, Computer Science"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          />
        </div>

        {/* Passing Year */}
        <div>
          <label htmlFor="passing_year" className="block font-bold text-[#ff7400] mb-2">
            Year of passing
          </label>
          <input
            id="passing_year"
            name="passing_year"
            type="number"
            min="1950"
            max="2100"
            placeholder="YYYY"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          />
        </div>

        {/* Experience */}
        <div>
          <label htmlFor="experience" className="block font-bold text-[#ff7400] mb-2">
            Work experience
          </label>
          <select
            id="experience"
            name="experience"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          >
            <option value="">Select experience</option>
            {experienceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Previous Role */}
        <div>
          <label htmlFor="prev_role" className="block font-bold text-[#ff7400] mb-2">
            Previous role / employer
          </label>
          <input
            id="prev_role"
            name="prev_role"
            type="text"
            placeholder="Company / Role"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          />
        </div>

        {/* Skills */}
        <div>
          <label htmlFor="skills" className="block font-bold text-[#ff7400] mb-2">
            Relevant skills / trainings
          </label>
          <input
            id="skills"
            name="skills"
            type="text"
            placeholder="e.g. waste handling, MS Office"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          />
        </div>

        {/* Preferred Location */}
        <div>
          <label htmlFor="preferred_location" className="block font-bold text-[#ff7400] mb-2">
            Preferred location
          </label>
          <input
            id="preferred_location"
            name="preferred_location"
            type="text"
            placeholder="City / District"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          />
        </div>

        {/* Expected Salary */}
        <div>
          <label htmlFor="salary" className="block font-bold text-[#ff7400] mb-2">
            Expected salary (INR)
          </label>
          <input
            id="salary"
            name="salary"
            type="text"
            placeholder="e.g. ₹15,000 p.m."
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          />
        </div>

        {/* Available From */}
        <div>
          <label htmlFor="available_from" className="block font-bold text-[#ff7400] mb-2">
            Available to join from
          </label>
          <input
            id="available_from"
            name="available_from"
            type="text"
            placeholder="DD/MM/YYYY"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
          />
        </div>

        {/* Cover Message */}
        <div>
          <label htmlFor="cover" className="block font-bold text-[#ff7400] mb-2">
            Short note / cover message
          </label>
          <textarea
            id="cover"
            name="cover"
            placeholder="Why do you want to join Aone Kabadi? (max 300 words)"
            autoComplete="off"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all resize-none"
          />
        </div>

        {/* Status Message */}
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
              <p className="font-semibold text-sm">{status.message}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: isLoading ? 1 : 1.02 }}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
          className="w-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white font-black py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <FaSpinner className="animate-spin" />
              <span>Sending…</span>
            </>
          ) : (
            <span>Submit Application</span>
          )}
        </motion.button>

        <p className="text-xs text-gray-500 text-center">
          We will contact shortlisted candidates within 7–10 business days.
        </p>
      </form>
    </motion.div>
  )
}



