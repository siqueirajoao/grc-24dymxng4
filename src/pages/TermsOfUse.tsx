import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Building2, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { LandingFooter } from '@/components/landing/LandingFooter'
import { Card, CardContent } from '@/components/ui/card'
import { supabase } from '@/lib/supabase/client'

export default function TermsOfUse() {
  const [content, setContent] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const { data, error } = await supabase
          .from('policies')
          .select('content')
          .eq('title', 'Termos de Uso')
          .single()

        if (error) throw error

        setContent(data?.content || null)
      } catch (err) {
        console.error('Error fetching terms:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchTerms()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 selection:text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-blue-700 to-blue-500 p-1.5 rounded-lg shadow-lg shadow-blue-900/50">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Lawyn GRC
            </span>
          </Link>
          <Link to="/">
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o Início
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              TERMOS DE USO – LAWYN
            </h1>
          </div>

          <Separator className="bg-white/10" />

          <Card className="bg-zinc-900/50 border-white/10 text-zinc-300">
            <CardContent className="p-6 md:p-10">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                  <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                  <p className="text-zinc-500">Carregando termos de uso...</p>
                </div>
              ) : error || !content ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4 text-red-400">
                  <AlertCircle className="w-8 h-8" />
                  <p>Não foi possível carregar os termos de uso no momento.</p>
                  <Button
                    variant="outline"
                    onClick={() => window.location.reload()}
                    className="mt-4 border-white/10 hover:bg-white/5"
                  >
                    Tentar Novamente
                  </Button>
                </div>
              ) : (
                <div
                  dangerouslySetInnerHTML={{ __html: content }}
                  className="terms-content"
                />
              )}
            </CardContent>
          </Card>

          {!loading && !error && (
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm md:text-base font-bold text-zinc-400 text-center uppercase tracking-wide leading-relaxed">
                AO UTILIZAR O LAWYN, O USUÁRIO DECLARA CIÊNCIA DE QUE A
                PLATAFORMA É UMA FERRAMENTA DE APOIO E NÃO GARANTE CONFORMIDADE
                REGULATÓRIA OU RESULTADOS ESPECÍFICOS.
              </p>
            </div>
          )}
        </div>
      </main>

      <LandingFooter />
    </div>
  )
}
