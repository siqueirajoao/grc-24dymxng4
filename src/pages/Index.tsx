import { AnimatedBackground } from '@/components/AnimatedBackground'
import { Navbar } from '@/components/landing/Navbar'
import { HeroSection } from '@/components/landing/HeroSection'
import { ModuleShowcase } from '@/components/landing/ModuleShowcase'
import { SegmentsSection } from '@/components/landing/SegmentsSection'
import { ComplianceSection } from '@/components/landing/ComplianceSection'
import { LandingFooter } from '@/components/landing/LandingFooter'
import { FAQSection } from '@/components/landing/FAQSection'
import { FeaturesSection } from '@/components/landing/FeaturesSection'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      {/* Background Canvas Layer */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Modules Interactive Showcase */}
        <ModuleShowcase />

        {/* Detailed Features Grid */}
        <FeaturesSection />

        {/* Target Audience */}
        <SegmentsSection />

        {/* Regulatory & Dashboard Preview */}
        <ComplianceSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <LandingFooter />
    </div>
  )
}
