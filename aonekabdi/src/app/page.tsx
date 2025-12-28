'use client'

import { useState } from 'react'
import BookingModal from './components/BookingModal'
import HeroSection from './components/HeroSection'
import IndividualsSection from './components/IndividualsSection'
import EcoSystemSection from './components/EcoSystemSection'
import Marquee from './components/Marquee'
import Ourservices from './components/Ourservices'
import InitiativesSection from './components/InitiativesSection'
import PresenceSection from './components/PresenceSection'
import Founders from './components/Founders'
import TestimonialsSection from './components/TestimonialsSection'
import ImpactSection from './components/ImpactSection'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formType, setFormType] = useState<'pickup' | 'franchise'>('pickup')

  const openModal = (type: 'pickup' | 'franchise') => {
    setFormType(type)
    setIsModalOpen(true)
  }

  return (
    <>
      <HeroSection onOpenModal={openModal} />
      <Marquee />
      <IndividualsSection onOpenModal={openModal} />
      <EcoSystemSection />
      <Ourservices />
      {/* <InitiativesSection /> */}
      <PresenceSection />
      <Founders />
      <TestimonialsSection />
      <ImpactSection />
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formType={formType}
      />
    </>
  )
}
