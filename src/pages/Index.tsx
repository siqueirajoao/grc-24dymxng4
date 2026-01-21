import { useState } from 'react'
import { HeroSection } from '@/components/landing/HeroSection'
import { Navbar } from '@/components/landing/Navbar'
import { FeaturesSection } from '@/components/landing/FeaturesSection'
import { ModuleShowcase } from '@/components/landing/ModuleShowcase'
import { EcosystemGraph } from '@/components/landing/EcosystemGraph'
import { SegmentsSection } from '@/components/landing/SegmentsSection'
import { ComplianceSection } from '@/components/landing/ComplianceSection'
import { FAQSection } from '@/components/landing/FAQSection'
import { LandingFooter } from '@/components/landing/LandingFooter'
import { LeadGenerationModal } from '@/components/landing/LeadGenerationModal'
import { MouseFollower } from '@/components/landing/MouseFollower'
import { AnimatedBackground } from '@/components/AnimatedBackground'

export default function Index() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden">
      <MouseFollower />
      <AnimatedBackground />

      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main>
        <HeroSection onOpenDemo={() => setIsDemoOpen(true)} />
        <FeaturesSection />
        <ModuleShowcase onOpenDemo={() => setIsDemoOpen(true)} />
        <EcosystemGraph />
        <SegmentsSection />
        <ComplianceSection />
        <FAQSection />
      </main>

      <LandingFooter />

      <LeadGenerationModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  )
}
