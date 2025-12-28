'use client'

import { motion } from 'framer-motion'
import { FaShieldAlt, FaLock, FaUserShield, FaEye } from 'react-icons/fa'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f6fbf8] via-white to-[#f0fdf4] py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Privacy <span className="text-[#22c55e]">Policy</span>
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
              <FaShieldAlt className="text-[#22c55e] text-2xl" />
              <h2 className="text-2xl font-black text-gray-900">Introduction</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Aone Kabadi ("we," "our," or "us") is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you
              visit our website or use our services.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaEye className="text-[#22c55e] text-2xl" />
              <h2 className="text-2xl font-black text-gray-900">Information We Collect</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may collect personal information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700 ml-4">
                  <li>Name and contact information (phone number, email address)</li>
                  <li>Address and location details for pickup services</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about
                  your device, including:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700 ml-4">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Device information and operating system</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaLock className="text-[#22c55e] text-2xl" />
              <h2 className="text-2xl font-black text-gray-900">How We Use Your Information</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and schedule scrap pickup requests</li>
              <li>Communicate with you about your orders and services</li>
              <li>Send you promotional materials and updates (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUserShield className="text-[#22c55e] text-2xl" />
              <h2 className="text-2xl font-black text-gray-900">Information Sharing and Disclosure</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <strong>Service Providers:</strong> We may share information with third-party service
                providers who perform services on our behalf (e.g., payment processing, delivery
                services)
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information if required by law or
                in response to valid requests by public authorities
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale
                of assets, your information may be transferred
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share information with your explicit
                consent
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-black text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your
              personal information against unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-black text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Access and receive a copy of your personal information</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Withdraw consent at any time where we rely on consent</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-black text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and
              hold certain information. You can instruct your browser to refuse all cookies or to
              indicate when a cookie is being sent. However, if you do not accept cookies, you may
              not be able to use some portions of our website.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-black text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last updated" date. You
              are advised to review this Privacy Policy periodically for any changes.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-black text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
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


