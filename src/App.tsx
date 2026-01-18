import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from './components/Layout'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import Risks from './pages/Risks'
import Controls from './pages/Controls'
import Audits from './pages/Audits'
import Policies from './pages/Policies'
import Cadocs from './pages/Cadocs'
import Lgpd from './pages/Lgpd'
import ThirdParty from './pages/ThirdParty'
import Bia from './pages/Bia'
import Tasks from './pages/Tasks'
import Admin from './pages/Admin'

const App = () => (
  <BrowserRouter
    future={{ v7_startTransition: false, v7_relativeSplatPath: false }}
  >
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/controls" element={<Controls />} />
          <Route path="/audits" element={<Audits />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/cadocs" element={<Cadocs />} />
          <Route path="/lgpd" element={<Lgpd />} />
          <Route path="/third-party" element={<ThirdParty />} />
          <Route path="/bia" element={<Bia />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
