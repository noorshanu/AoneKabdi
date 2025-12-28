import AboutHero from '../components/About/AboutHero'
import ImageSlider from '../components/About/ImageSlider'
import ImageCarousel from '../components/About/ImageCarousel'
import LeadershipSection from '../components/About/LeadershipSection'
import FoundersMessage from '../components/About/FoundersMessage'
import AboutCTA from '../components/About/AboutCTA'

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <ImageSlider />
      <LeadershipSection />
      <FoundersMessage />
      <ImageCarousel />
      <AboutCTA />
    </main>
  )
}

