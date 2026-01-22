import { useState, useEffect } from 'react'
import { Navbar } from '@/components/landing/Navbar'
import { LandingFooter } from '@/components/landing/LandingFooter'
import { LeadGenerationModal } from '@/components/landing/LeadGenerationModal'
import { supabase } from '@/lib/supabase/client'
import { Loader2 } from 'lucide-react'

export default function TermsOfUse() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [content, setContent] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadTerms() {
      try {
        const { data, error } = await supabase
          .from('policies')
          .select('content')
          .eq('title', 'Termos de Uso')
          .single()

        if (error) {
          console.error('Error loading terms:', error)
          return
        }

        if (data) {
          setContent(data.content)
        }
      } catch (error) {
        console.error('Error loading terms:', error)
      } finally {
        setLoading(false)
      }
    }

    loadTerms()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      <main className="container px-4 py-24 md:py-32 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">
          TERMOS DE USO – LAWYN
        </h1>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          </div>
        ) : (
          <div
            className="prose prose-invert prose-blue max-w-none text-gray-300"
            dangerouslySetInnerHTML={{ __html: content || '' }}
          />
        )}
      </main>

      <LandingFooter />

      <LeadGenerationModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  )
}
