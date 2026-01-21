import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

interface NavbarProps {
  onOpenDemo: () => void
}

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Ecossistema', href: '#ecosystem' },
    { label: 'Soluções', href: '#features' },
    { label: 'Compliance', href: '#compliance' },
    { label: 'FAQ', href: '#faq' },
  ]

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6',
      )}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
          Lawyn
          <span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="default"
            size="sm"
            onClick={onOpenDemo}
            className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-6"
          >
            Solicitar Demo
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-medium text-gray-300 hover:text-white py-2"
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="default"
            size="lg"
            onClick={() => {
              onOpenDemo()
              setIsMobileMenuOpen(false)
            }}
            className="bg-blue-600 hover:bg-blue-500 text-white w-full rounded-full"
          >
            Solicitar Demo
          </Button>
        </div>
      )}
    </nav>
  )
}
