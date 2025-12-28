'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaHandshake, FaHammer, FaChartLine, FaTruck, FaFileAlt, FaCheckCircle } from 'react-icons/fa'

const bulletPoints = [
  {
    icon: FaSearch,
    title: 'Inspection',
    description: 'We inspect premises and scrap yards to ensure collection and segregation compatibility.',
    color: 'from-[#22c55e] to-[#16a34a]',
  },
  {
    icon: FaHandshake,
    title: 'Participation & Planning',
    description: 'We engage in local bidding/tenders and design scalable plans for scrap disposal and collection frequency.',
    color: 'from-[#ff7400] to-[#ea580c]',
  },
  {
    icon: FaHammer,
    title: 'Scrapyard Set-Up & Maintenance',
    description: 'We advise on scrap yard setup, segregation flows and ongoing maintenance for compliance and safety.',
    color: 'from-[#22c55e] to-[#16a34a]',
  },
  {
    icon: FaChartLine,
    title: 'Capacity Building',
    description: 'Staff training and knowledge transfer — ensuring correct waste handling practices and operational quality.',
    color: 'from-[#ff7400] to-[#ea580c]',
  },
  {
    icon: FaTruck,
    title: 'Collection & Transportation',
    description: 'We coordinate pickup schedules and transport segregated waste to MRFs or recovery facilities.',
    color: 'from-[#22c55e] to-[#16a34a]',
  },
  {
    icon: FaFileAlt,
    title: 'Reporting & Digitization',
    description: 'Digital record-keeping and monthly reporting to track quantities and categories collected.',
    color: 'from-[#ff7400] to-[#ea580c]',
  },
]

export default function CareerContent() {
  return (
    <div className="space-y-8">
      {/* Core Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border-2 border-[#22c55e] rounded-2xl p-8 shadow-lg"
      >
        <h3 className="text-2xl md:text-3xl font-black text-[#ff7400] mb-6">Our Core Values</h3>
        <div className="space-y-4 text-gray-700">
          <div>
            <strong className="text-gray-900">Vision:</strong> Build a circular economy where used products are 
            remanufactured into new products to reduce over-exploitation of natural resources and maximize recycling.
          </div>
          <div>
            <strong className="text-gray-900">Mission:</strong> Make recycling accessible and create an ecosystem 
            of sustainable living by providing technology-enabled scrap collection, segregation and marketing support.
          </div>
          <div>
            <strong className="text-gray-900">Goal:</strong> Through continuous innovation and capacity building, 
            make recycling achievable and scalable across institutions and individuals.
          </div>
        </div>
      </motion.section>

      {/* What We Do Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] border-2 border-[#22c55e] rounded-2xl p-8 shadow-lg"
      >
        <h3 className="text-2xl md:text-3xl font-black text-[#ff7400] mb-8">What We Do</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {bulletPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <motion.div
                key={`career-what-we-do-${point.title}-${idx}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex gap-4 items-start">
                  <motion.div
                    className={`p-3 bg-gradient-to-br ${point.color} rounded-xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-2xl" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-black text-lg text-gray-900 mb-2">{point.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Key Benefits Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border-2 border-[#22c55e] rounded-2xl p-8 shadow-lg"
      >
        <h3 className="text-2xl md:text-3xl font-black text-[#ff7400] mb-6">Key Benefits</h3>
        <ul className="space-y-3 mb-6">
          {[
            { label: 'Price', text: 'Competitive scrap rates based on market.' },
            { label: 'Digitization', text: 'Transparent record keeping and reporting.' },
            { label: 'Specialization', text: 'Professionally managed operations and trained staff.' },
            { label: 'Recognition', text: 'Brand recognition and partnerships for sustainability goals.' },
            { label: 'Compliance', text: 'Help fulfilling regulatory (EPR) requirements.' },
          ].map((benefit, idx) => (
            <motion.li
              key={`benefit-${benefit.label}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-3 items-start"
            >
              <FaCheckCircle className="text-[#22c55e] mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                <strong className="text-gray-900">{benefit.label}:</strong> {benefit.text}
              </span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-6 p-6 bg-[#f0fdf4] rounded-xl border border-[#22c55e]/20">
          <strong className="text-gray-900 block mb-2">Your Impacts & Contribution</strong>
          <p className="text-gray-700">
            By joining Aone Kabadi, you help divert waste from landfills, reduce greenhouse emissions 
            and contribute to local community wellbeing through responsible recycling.
          </p>
        </div>
      </motion.section>

      {/* Maximizing Recycling Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[#fff7ed] to-[#ffedd5] border-2 border-[#ff7400] rounded-2xl p-8 shadow-lg"
      >
        <h3 className="text-2xl md:text-3xl font-black text-[#ff7400] mb-4">Maximizing Recycling</h3>
        <p className="text-gray-700 mb-8">
          We help households and corporations set up systems to segregate and recycle dry waste, 
          enabling higher recovery rates across cities and communities.
        </p>
        <h3 className="text-2xl md:text-3xl font-black text-[#ff7400] mb-4">Minimizing Landfills</h3>
        <p className="text-gray-700">
          Through daily segregation and awareness, combined with our collection services, we reduce 
          landfill input and encourage reuse and remanufacturing.
        </p>
      </motion.section>
    </div>
  )
}



