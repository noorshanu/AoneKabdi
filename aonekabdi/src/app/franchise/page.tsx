import FranchiseHero from '../components/Franchise/FranchiseHero'
import PurposeSection from '../components/Franchise/PurposeSection'
import FranchiseImpact from '../components/Franchise/FranchiseImpact'
import OwnerJourney from '../components/Franchise/OwnerJourney'
import SupportSection from '../components/Franchise/SupportSection'
import FAQSection from '../components/Franchise/FAQSection'
import FinalCTA from '../components/Franchise/FinalCTA'
import PartnerTestimonials from '../components/Franchise/PartnerTestimonials'

export default function FranchisePage() {
  return (
    <main>
      <FranchiseHero />
      <PurposeSection />
      <FranchiseImpact />
      <OwnerJourney />
      <SupportSection />
      <FAQSection />
      <FinalCTA />
      <PartnerTestimonials />
    </main>
  )
}

