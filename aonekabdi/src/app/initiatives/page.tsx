import InitiativesHero from '../components/Initiatives/InitiativesHero'
import InitiativesCards from '../components/Initiatives/InitiativesCards'
import InitiativesCarousel from '../components/Initiatives/InitiativesCarousel'
import InitiativesStats from '../components/Initiatives/InitiativesStats'
import FranchisePoster from '../components/Initiatives/FranchisePoster'
import StepsSection from '../components/Initiatives/StepsSection'

export default function InitiativesPage() {
  return (
    <main>
      <InitiativesHero />
      <InitiativesCards />
      <InitiativesCarousel />
      <InitiativesStats />
      <FranchisePoster />
      <StepsSection />
    </main>
  )
}

