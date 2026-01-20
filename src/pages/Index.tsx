import { useState } from 'react'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { Navbar } from '@/components/landing/Navbar'
import { HeroSection } from '@/components/landing/HeroSection'
import { ModuleShowcase } from '@/components/landing/ModuleShowcase'
import { SegmentsSection } from '@/components/landing/SegmentsSection'
import { ComplianceSection } from '@/components/landing/ComplianceSection'
import { LandingFooter } from '@/components/landing/LandingFooter'
import { FAQSection } from '@/components/landing/FAQSection'
import { FeaturesSection } from '@/components/landing/FeaturesSection'
import { MouseFollower } from '@/components/landing/MouseFollower'
import { LeadGenerationModal } from '@/components/landing/LeadGenerationModal'

export default function LandingPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const handleOpenDemo = () => setIsDemoModalOpen(true)

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      {/* Background Canvas Layer */}
      <AnimatedBackground />

      {/* Mouse Follower Glow Effect */}
      <MouseFollower />

      {/* Navigation */}
      <Navbar />

      {/* Lead Gen Modal */}
      <LeadGenerationModal
        open={isDemoModalOpen}
        onOpenChange={setIsDemoModalOpen}
      />

      <main>
        {/* Hero Section */}
        <HeroSection onOpenDemo={handleOpenDemo} />

        {/* Modules Interactive Showcase */}
        <ModuleShowcase onOpenDemo={handleOpenDemo} />

        {/* Detailed Features Grid */}
        <FeaturesSection />

        {/* Target Audience */}
        <SegmentsSection />

        {/* Regulatory & Dashboard Preview */}
        <ComplianceSection onOpenDemo={handleOpenDemo} />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <LandingFooter />
    </div>
  )
}
