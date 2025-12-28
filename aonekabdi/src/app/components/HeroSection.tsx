'use client'

import Link from 'next/link'

interface HeroSectionProps {
  onOpenModal: (type: 'pickup' | 'franchise') => void
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative h-[82vh] min-h-[520px] flex items-center justify-center overflow-hidden bg-black ">
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-[0.45] saturate-95"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/assets/hero-video-faststart.mp4" type="video/mp4" />
      </video>

      {/* Centered Content */}
      <div className="relative z-5 max-w-[800px] mx-auto px-5 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          Got <span className="bg-[#22c55e] rounded-md">scrap?</span>
          <br />
          Sell it to{' '}
          <span className="inline-flex items-baseline gap-2 font-black uppercase bg-linear-to-b from-[#f6d76b] via-[#d4af37] to-[#ff7300] bg-clip-text text-transparent [-webkit-text-stroke:1.5px_rgba(0,0,0,0.85)] drop-shadow-[0_8px_18px_rgba(183,28,28,0.4)]">
            AONEKABADI
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Your Waste. Our Business. Helping brands go Plastic-Neutral and offset their carbon footprint.
        </p>
        <div className="flex flex-wrap gap-5 justify-center mb-8">
          <button
            onClick={() => onOpenModal('pickup')}
            className="group relative px-10 py-4 bg-gradient-to-r from-green via-[#22c55e] to-green text-white font-extrabold rounded-2xl text-lg shadow-[0_8px_24px_rgba(34,197,94,0.4)] hover:shadow-[0_12px_32px_rgba(34,197,94,0.6)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Pickup
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e] via-green to-[#16a34a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <Link
            href="/rates"
            className="group px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white font-extrabold rounded-2xl text-lg hover:bg-white/20 hover:border-white/60 hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center gap-2">
              See Rates
              <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </span>
          </Link>
          <button
            onClick={() => onOpenModal('franchise')}
            className="group relative px-10 py-4 bg-gradient-to-r from-orange via-[#ff7947] to-orange text-white font-extrabold rounded-2xl text-lg shadow-[0_8px_24px_rgba(255,111,60,0.4)] hover:shadow-[0_12px_32px_rgba(255,111,60,0.6)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Apply for Franchise
              <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff7947] via-orange to-[#ff5c00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      
  
      </div>

      {/* Wave Separator */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[120px]">
          <path d="M0,40 C200,120 340,-20 720,40 C1100,100 1240,20 1440,40 L1440 120 L0 120 Z" fill="#e8f5e9" />
        </svg>
      </div> */}
    </section>
  )
}

