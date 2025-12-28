'use client'

import { motion } from 'framer-motion'
import { FaFileContract, FaHandshake, FaExclamationTriangle, FaGavel, FaCheckCircle } from 'react-icons/fa'

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f6fbf8] via-white to-[#f0fdf4] py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Terms & <span className="text-[#22c55e]">Conditions</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaFileContract className="text-[#22c55e] text-2xl" />
              <h2 className="text-2xl font-black text-gray-900">Agreement to Terms</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the services of Aone Kabadi ("we," "us," or "our"), you agree to
              be bound by these Terms and Conditions. If you do not agree to these terms, please do
              not use our services.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaHandshake className="text-[#22c55e] text-2xl" />
              <h2 className="text-2xl font-black text-gray-900">Services Description</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aone Kabadi provides scrap collection and recycling services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Doorstep scrap pickup services</li>
              <li>Purchase of various scrap materials (iron, steel, plastic, paper, e-waste, etc.)</li>
              <li>Recycling and disposal services</li>
              <li>Scrap rate information and calculations</li>
              <li>Franchise opportunities</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaCheckCircle className="text-[#22c55e] text-2xl" />
              <h2 className="text-2xl font-black text-gray-900">User Responsibilities</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Provide accurate and complete information when booking services</li>
              <li>Ensure scrap materials are properly sorted and accessible for pickup</li>
              <li>Be present or arrange for authorized representative during scheduled pickup</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not provide hazardous materials or prohibited items</li>
              <li>Pay agreed-upon prices for scrap materials purchased</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-black text-gray-900 mb-4">Pricing and Payment</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Scrap Rates</h3>
                <p className="text-gray-700 leading-relaxed">
                  Scrap rates are subject to market conditions and may vary. Rates displayed on our
                  website are indicative and final pricing will be determined at the time of pickup
                  based on:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700 ml-4">
                  <li>Material quality and condition</li>
                  <li>Current market rates</li>
                  <li>Quantity and weight</li>
                  <li>Sorting and preparation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Payment Terms</h3>
                <p className="text-gray-700 leading-relaxed">
                  Payment will be made as agreed at the time of pickup. We accept cash and digital
                  payment methods. Payment must be completed before or at the time of material
                  collection.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaExclamationTriangle className="text-[#ff7400] text-2xl" />
              <h2 className="text-2xl font-black text-gray-900">Limitation of Liability</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                Aone Kabadi shall not be liable for any indirect, incidental, special, or
                consequential damages
              </li>
              <li>
                Our total liability shall not exceed the amount paid by you for the specific service
                in question
              </li>
              <li>
                We are not responsible for any loss or damage to property not directly caused by our
                negligence
              </li>
              <li>
                We do not guarantee the accuracy of scrap rate estimates provided online
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-black text-gray-900 mb-4">Cancellation and Refunds</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Service Cancellation</h3>
                <p className="text-gray-700 leading-relaxed">
                  You may cancel a scheduled pickup by contacting us at least 24 hours in advance.
                  Cancellations made less than 24 hours before scheduled pickup may be subject to a
                  cancellation fee.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Refunds</h3>
                <p className="text-gray-700 leading-relaxed">
                  Refunds, if applicable, will be processed according to our refund policy. Refund
                  requests must be made within 7 days of the service date and are subject to review.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-black text-gray-900 mb-4">Prohibited Materials</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The following materials are prohibited and will not be accepted:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Hazardous waste (chemicals, batteries, medical waste)</li>
              <li>Radioactive materials</li>
              <li>Stolen or illegal items</li>
              <li>Materials that pose health or safety risks</li>
              <li>Items that cannot be legally recycled or disposed of</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaGavel className="text-[#22c55e] text-2xl" />
              <h2 className="text-2xl font-black text-gray-900">Governing Law</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws
              of India, without regard to its conflict of law provisions. Any disputes arising from
              these terms shall be subject to the exclusive jurisdiction of the courts in Bokaro,
              Jharkhand, India.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-black text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. We will notify
              users of any material changes by posting the updated terms on this page and updating the
              "Last updated" date. Your continued use of our services after such changes constitutes
              acceptance of the modified terms.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-black text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong> info@aonekabadi.com
              </p>
              <p>
                <strong>Phone:</strong> +91 78568 15038
              </p>
              <p>
                <strong>Address:</strong> Bokaro, Jharkhand, India
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  )
}


