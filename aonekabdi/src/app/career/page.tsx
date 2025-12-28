import CareerHero from '@/app/components/Career/CareerHero'
import CareerContent from '@/app/components/Career/CareerContent'
import CareerForm from '@/app/components/Career/CareerForm'
import CareerNotes from '@/app/components/Career/CareerNotes'

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <CareerHero />

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2">
            <CareerContent />
            <div className="mt-8">
              <CareerNotes />
            </div>
          </div>

          {/* Right Column - Application Form (Sticky) */}
          <div className="lg:col-span-1">
            <CareerForm />
          </div>
        </div>
      </div>
    </main>
  )
}



