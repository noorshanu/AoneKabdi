'use client'

import { useState } from 'react'
import ServicesHero from '../components/Services/ServicesHero'
import ServicesGrid from '../components/Services/ServicesGrid'
import WhyChooseUs from '../components/Services/WhyChooseUs'
import CTASection from '../components/Services/CTASection'
import BookingModal from '../components/BookingModal'

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formType, setFormType] = useState<'pickup' | 'franchise'>('pickup')

  const openModal = (type: 'pickup' | 'franchise') => {
    setFormType(type)
    setIsModalOpen(true)
  }

  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <WhyChooseUs />
      <CTASection onOpenModal={openModal} />
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formType={formType}
      />
    </main>
  )
}

