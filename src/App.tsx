import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/providers/AuthProvider'
import Index from './pages/Index'
import Dashboard from './pages/Dashboard'
import Risks from './pages/Risks'
import Controls from './pages/Controls'
import Audits from './pages/Audits'
import Policies from './pages/Policies'
import Regulatory from './pages/Cadocs'
import Tasks from './pages/Tasks'
import Admin from './pages/Admin'
import Lgpd from './pages/Lgpd'
import ThirdParty from './pages/ThirdParty'
import Bia from './pages/Bia'
import TermsOfUse from './pages/TermsOfUse'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/terms" element={<TermsOfUse />} />

            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/risks" element={<Risks />} />
              <Route path="/controls" element={<Controls />} />
              <Route path="/audits" element={<Audits />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/regulatory" element={<Regulatory />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/lgpd" element={<Lgpd />} />
              <Route path="/third-party" element={<ThirdParty />} />
              <Route path="/bia" element={<Bia />} />
              <Route path="/admin" element={<Admin />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
)

export default App
