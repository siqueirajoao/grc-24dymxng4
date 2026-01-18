import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, Building2, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-white/10 py-3'
          : 'bg-transparent border-transparent py-5',
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-blue-700 to-blue-500 p-1.5 rounded-lg shadow-lg shadow-blue-900/50">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Lawyn GRC
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a
            href="#features"
            className="hover:text-blue-400 transition-colors relative group"
          >
            Soluções
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full" />
          </a>
          <a
            href="#segments"
            className="hover:text-blue-400 transition-colors relative group"
          >
            Segmentos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full" />
          </a>
          <a
            href="#compliance"
            className="hover:text-blue-400 transition-colors relative group"
          >
            Compliance
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full" />
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white border-0 font-medium px-6 shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all duration-300 hover:-translate-y-0.5">
              Login
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-300"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-zinc-950 border-zinc-800 text-white w-[300px]"
            >
              <div className="flex flex-col gap-6 mt-10">
                <a
                  href="#features"
                  className="text-lg font-medium hover:text-blue-400"
                >
                  Soluções
                </a>
                <a
                  href="#segments"
                  className="text-lg font-medium hover:text-blue-400"
                >
                  Segmentos
                </a>
                <a
                  href="#compliance"
                  className="text-lg font-medium hover:text-blue-400"
                >
                  Compliance
                </a>
                <Link to="/dashboard">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Acessar Plataforma
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
