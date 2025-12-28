'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-8 px-5 border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo.png"
              alt="Aone Kabadi"
              width={46}
              height={46}
              className="h-[46px] w-auto"
            />
            <div className="text-sm text-gray-300">
              Helping build a greener India — one pickup at a time.
            </div>
          </div>

          <nav className="flex flex-wrap gap-4 md:gap-6" aria-label="Footer navigation">
            <Link
              href="/career"
              className="text-sm font-semibold hover:text-[#22c55e] transition-colors"
            >
              Career
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm font-semibold hover:text-[#22c55e] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm font-semibold hover:text-[#22c55e] transition-colors"
            >
              Terms & Conditions
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
          © {currentYear} Aone Kabadi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

