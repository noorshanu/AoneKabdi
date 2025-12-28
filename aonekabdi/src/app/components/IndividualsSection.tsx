'use client'

import Link from 'next/link'

interface IndividualsSectionProps {
  onOpenModal: (type: 'pickup' | 'franchise') => void
}

export default function IndividualsSection({ onOpenModal }: IndividualsSectionProps) {
  return (
    <section className="py-16 px-5 bg-gradient-to-b from-bg to-white">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-deep mb-4">
          For <span className="text-[#22c55e]">Individuals</span>
        </h2>
        <p className="text-xl text-muted mb-12 max-w-3xl mx-auto">
          Doorstep pickups, instant pricing, safe disposal and reward credits — making sustainable choices simple.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-xl font-bold text-deep mb-3">Free Doorstep Pickup</h3>
            <p className="text-muted">
              No need to carry heavy scrap. We come to your door, weigh it, and pay you instantly.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-deep mb-3">Fair & Transparent Pricing</h3>
            <p className="text-muted">
              Get the best rates for your scrap. Check prices online before booking a pickup.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">♻️</div>
            <h3 className="text-xl font-bold text-deep mb-3">Eco-Friendly Recycling</h3>
            <p className="text-muted">
              All scrap is responsibly recycled. Track your item&apos;s journey from pickup to recycling.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => onOpenModal('pickup')}
            className="px-8 py-4 bg-[#22c55e] text-white font-bold rounded-lg hover:bg-[#16a34a] transition-colors text-lg shadow-lg"
          >
            Book a Pickup Now
          </button>
          <Link
            href="/services"
            className="px-8 py-4 border-2 border-green text-green font-bold rounded-lg hover:bg-green/10 transition-colors text-lg"
          >
            Learn More About Services
          </Link>
        </div>
      </div>
    </section>
  )
}

