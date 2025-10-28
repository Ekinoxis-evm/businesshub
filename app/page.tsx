import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ValuePropositionSection } from '@/components/sections/value-proposition-section'
import { DifferentialSection } from '@/components/sections/differential-section'
import { AcademicBlockSection } from '@/components/sections/academic-block-section'
import { LocationSection } from '@/components/sections/location-section'
import { RegistrationSection } from '@/components/sections/registration-section'
import { Footer } from '@/components/sections/footer'
import { getEventContent } from '@/lib/content'

export default async function HomePage() {
  const eventData = await getEventContent()

  return (
    <main className="min-h-screen bg-dark-bg">
      <HeroSection 
        title={eventData.title}
        description={eventData.description}
        date={eventData.date}
        location={eventData.location}
        eventDateTime="2025-11-29T09:00:00"
      />
      
      <AboutSection 
        context={eventData.context}
        attendees={eventData.attendees}
      />
      
      <ValuePropositionSection 
        valueProposition={eventData.valueProposition}
        duration={eventData.duration}
      />
      
      <DifferentialSection 
        differential={eventData.differential}
      />
      
      <AcademicBlockSection 
        academicBlock={eventData.academicBlock}
      />

      <LocationSection />
      
      <RegistrationSection 
        date={eventData.date}
        location={eventData.location}
        duration={eventData.duration}
        price={eventData.price}
      />
      
      <Footer />
    </main>
  )
}
