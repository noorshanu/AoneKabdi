export default function EcoSystemSection() {
  const ecosystemCards = [
    { title: 'Individuals', desc: 'Doorstep pickups, instant pricing, safe disposal and reward credits — making sustainable choices simple.' },
    { title: 'Businesses', desc: 'Industrial & commercial waste solutions, EPR-aligned reporting and bulk pickup schedules tailored to you.' },
    { title: 'Zero Waste Societies', desc: 'Workshops, segregation drives, and on-site recycling programs for societies aiming to hit zero-waste targets.' },
    { title: 'Vehicle Scrapping', desc: 'Compliant scrapping with paperwork support and certification — hassle-free and environmentally safe.' },
    { title: 'Traceable Recycling', desc: 'Track every consignment to certified recyclers — transparency from pickup to recycling certificate.' },
    { title: 'Rewards & Credits', desc: 'Earn credits for sustainable disposal — redeemable against pickups or partnered merchants.' },
  ]

  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-[#ff7400] text-center mb-4">
          Our Eco-System Towards Sustainability & Circular Economy
        </h2>
        <div className="text-base md:text-lg text-muted text-center mb-6">
          Turning scrap into opportunity — digitised, transparent and rewarding.
        </div>
        <p className="text-[15.5px] md:text-base leading-relaxed text-black text-center mb-8 max-w-[880px] mx-auto">
          AoneKabadi connects households, societies, and businesses to trustworthy scrap collection across India.
          We blend digitised convenience with certified recycling partners to ensure materials are reused, not wasted.
          Book pickups, get instant price quotes, and track your item&apos;s journey from pickup to recycling — all from your phone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {ecosystemCards.map((card, idx) => (
            <div
              key={`ecosystem-${card.title}-${idx}`}
              className="bg-[#72c28fab] border-2 border-green rounded-2xl p-6 shadow-md hover:-translate-y-1.5 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-extrabold text-[#16a34a] mb-2">{card.title}</h3>
              <p className="text-sm md:text-base leading-relaxed text-black">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

